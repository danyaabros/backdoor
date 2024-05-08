/*!
 * Noti
 * Данный скрипт отвечает за вывод уведомлений на сайте.
 */

const notis = new abrosnoti(document.querySelector(".abrosnoti"));
const message = DeusSiteInfo.noti_array;
const functionArray = eval(`[${message}]`);
let i = -1;
setInterval(() => {
  if (i < functionArray.length) {
    functionArray[i]();
  } else {
    notis.create("Deus System", "Кликни на уведомление, чтобы узнать, что оно тут делает.", 0, true, () => {i = -1});
  }
  i++;
}, 4000);
