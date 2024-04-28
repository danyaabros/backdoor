/*!
 * Tilda.js
 * (c) 2024-2024
 * Made by Daniel Abros
 * Telegram → https://t.me/abrosxd

 * const D3UStilda = {
 * RoadMap: "active", Эффект активности блоков
 * VD14: "active", Видео из Google Drive
 * };
 
 */

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
}

const currentDate = new Date();
const subscriptionDate = new Date(DeusSiteInfo.date);

if (currentDate < subscriptionDate) {
 for (const key in D3UStilda) {
  if (D3UStilda.hasOwnProperty(key)) {
   if (key === 'VD14' && D3UStilda[key] === 'active') {
    loadScript('https://deusnotam.github.io/D3US/tilda/video/VD14.js');
   }
   if (key === 'RoadMap' && D3UStilda[key] === 'active') {
    loadScript('https://deusnotam.github.io/D3US/tilda/mods/RoadMap.js');
   }
  }
 }
} else {
 console.log(`%cD3US System%c\n\nУ этого сайта закончилась подписка ${DeusSiteInfo.date}\nSubscription has expired for this site ${DeusSiteInfo.date}`, "font-weight: bold;", "");
}
