/*!
 * Noti
 * Данный скрипт отвечает за вывод уведомлений на сайте.
 */

const notis = new abrosnoti(document.querySelector(".abrosnoti"));
const message = DeusSiteInfo.noti_array;
let number = 0;
setInterval(() => {
  if (number === message.length) {
    notis.create("Deus System", "Кликни на уведомление, чтобы узнать, что оно тут делает.", 0, true, () => {number = 0});
  } else if (number < message.length) {
    message[number]();
  }
  number++;
}, 4000);
