/*!
 * D3US.js
 * (c) 2024-2024
 */
if (!window.D3USSYSTEM) {
  const DOMAIN = 'https://deusnotam.github.io';
  
  // Зашифрованные данные
  const ENCRYPTED_API_URL = 'aHR0cHM6Ly9hcHAubm9jb2RiLmNvbS9hcGkvdjEvZGIvZGF0YS9ub2NvL3Aya21icGhzZ3Zxczhrei9tcHFvZjNlNmYxdWVvem8vdmlld3Mvdnd6MXpuZThzZnh2aHhjbw==';
  const ENCRYPTED_API_TOKEN = 'YllhS01lakY1TzNxb2JwM3BqdTUyelRLRklpZ1kyb3RGb3ppMGxPMw==';

  loadScript(`${DOMAIN}/D3US/system/activator.js`);
  fetchData(decryptData(ENCRYPTED_API_URL), decryptData(ENCRYPTED_API_TOKEN))
    .then(data => handleData(data))

  async function fetchData(url, token) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'xc-token': token
        }
      });
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  function decryptData(encryptedData) {
    return atob(encryptedData);
  }

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
    const DeusSiteInfo = sites.find(site => {
      const siteHostname = new URL(site.url).hostname;
      return (
        currentDomain === siteHostname ||
        currentDomain === `www.${siteHostname}` ||
        `www.${currentDomain}` === siteHostname
      );
    });
    if (DeusSiteInfo) {
      if (DeusSiteInfo.blocker === 'on') loadScript(`${DOMAIN}/D3US/system/blocker.js`);
      if (DeusSiteInfo.noti === 'on') loadScript(`${DOMAIN}/D3US/system/noti.js`);
      if (DeusSiteInfo.ads === 'on') loadScript(`${DOMAIN}/D3US/system/ads.js`);
    }
  }

  function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
  }

  window.D3USSYSTEM = true;
}
