/*!
 * Tilda.js
 * (c) 2024-2024
 * Made by Daniel Abros
 * Telegram → https://t.me/abrosxd
 */

document.addEventListener('DOMContentLoaded', function () {
    function loadScriptTilda(src) {
        const script = document.createElement('script');
        script.src = src;
        document.head.appendChild(script);
    }

    // Проверяем каждый ключ в объекте D3UStilda после загрузки DOM
    for (const key in D3UStilda) {
        if (D3UStilda.hasOwnProperty(key)) {
            if (key === 'VD14' && D3UStilda[key] === 'active') {
                loadScriptTilda('https://deusnotam.github.io/D3US/tilda/video/VD14.js');
            }
            if (key === 'RoadMap' && D3UStilda[key] === 'active') {
                loadScriptTilda('https://deusnotam.github.io/D3US/tilda/mods/RoadMap.js');
            }
        }
    }
});
