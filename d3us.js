/*!
 * D3US.js
 * (c) 2024-2024
 */

if (!window.D3US) {
  const activatorScript = document.createElement('script');
  activatorScript.src = 'https://deusnotam.github.io/D3US/system/activator.js';
  document.head.appendChild(activatorScript);

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
        name: item.SiteName,
        url: item.SiteURL,
        noti: item.Noti,
        noti_title: item.NotiTitle,
        noti_text: item.NotiText,
        blocker: item.Blocker,
        blocker_effect: item.BlockerEffect,
        blocker_redirecturl: item.BlockerRedirectURL,
        blocker_blur_date: item.BlockerBlurDate,
        blocker_note: item.BlockerNote,
        ads: item.ADS,
        tilda: item.Tilda,
        date: item.Subscribe,
      }));
      checkDomain(D3USsite);
    } else {
      console.error('Ошибка: Полученные данные не соответствуют ожидаемой структуре');
    }
  }

  function checkDomain(D3USsite) {
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

    if (!DeusSiteInfo) {
      // console.log("%cD3US System%c\n\nСайт не найден в списке системы D3US.\nThe site was not found in the D3US system list.", "font-weight: bold;", "");
    } else {
      console.log("%cD3US System%c - %cConnected!%c\n\nProject Site → https://deusnotam.github.io", "font-weight: bold;", "", "color: #25ba1a; font-weight: bold;", "");
      if (DeusSiteInfo.blocker === "active") loadScript('https://deusnotam.github.io/D3US/system/blocker.js');
      if (DeusSiteInfo.noti === "active") loadScript('https://deusnotam.github.io/D3US/system/noti.js');
      if (DeusSiteInfo.ads === "active") loadScript('https://deusnotam.github.io/D3US/system/ads.js');
      if (DeusSiteInfo.tilda === "active") loadScript('https://deusnotam.github.io/D3US/tilda/tilda.js');
    } 
  }

  function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
  }

  window.D3US = true;
}
