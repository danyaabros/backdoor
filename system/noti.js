/*!
 * Noti
 * Данный скрипт отвечает за вывод уведомлений на сайте.
 */

const notis = new abrosnoti(document.querySelector(".abrosnoti"));
const message = DeusSiteInfo.noti_array;
const functionArray = eval(`[${message}]`);
let i = 0;
functionArray[0]();
setInterval(() => {
  if (i === functionArray.length) {
    notis.create("Deus System", "Кликни на уведомление, чтобы узнать, что оно тут делает.", 0, true, () => { i = 0; })
  } else if (i < functionArray.length) {
    functionArray[i]();
  }
  i++;
}, 4000);
