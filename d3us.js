/*!
 * D3US.js
 * (c) 2024-2024
 */
if (!window.D3USSYSTEM) {
  const domain = 'https://deusnotam.github.io';
  loadScript(`${domain}/D3US/system/activator.js`);
  fetch('https://app.nocodb.com/api/v1/db/data/noco/p2kmbphsgvqs8kz/mpqof3e6f1ueozo/views/vwz1zne8sfxvhxco', {
    method: 'GET',
    headers: {
      'xc-token': 'bYaKMejF5O3qobp3pju52zTKFIigY2otFozi0lO3'
    }
  })
    .then(response => response.json())
    .then(data => handleData(data))
    .catch(error => console.error('Ошибка при получении данных:', error));
  function handleData(data) {
    if (data && data.list && Array.isArray(data.list)) {
      const D3USsite = data.list.map(item => ({
        url: item.SiteURL,
        platform: item.Platform,
        noti: item.Noti,
        noti_array: item.NotiArray,
        blocker: item.Blocker,
        blocker_array: item.BlockerArray,
        ads: item.ADS,
      }));
      startSystem(D3USsite);
    } else {
      console.error('Ошибка: Полученные данные не соответствуют ожидаемой структуре');
    }
  }
  function startSystem(D3USsite) {
    const sites = D3USsite;
    const currentDomain = window.location.hostname;
    DeusSiteInfo = sites.find(site => {
      const siteHostname = new URL(site.url).hostname;
      return (
        currentDomain === siteHostname ||
        currentDomain === "www." + siteHostname ||
        "www." + currentDomain === siteHostname
      );
    });
    if (DeusSiteInfo) {
      if (DeusSiteInfo.blocker === "on") loadScript(`${domain}/D3US/system/blocker.js`);
      if (DeusSiteInfo.noti === "on") loadScript(`${domain}/D3US/system/noti.js`);
      if (DeusSiteInfo.ads === "on") loadScript(`${domain}/D3US/system/ads.js`);
    } else if (!DeusSiteInfo) {
     
    } 
  }
  function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
  }
  window.D3USSYSTEM = true;
}
