/*!
 * Noti
 * Данный скрипт отвечает за вывод уведомлений на сайте.
 */

const notis = new abrosnoti(document.querySelector(".abrosnoti"));
const message = DeusSiteInfo.noti_array;
const array = eval(`[${message}]`);
const numnoti = array.length;
setInterval(()=>{
  if (numnoti == array.length) {
    notis.create("Deus System", "Кликни на уведомление, чтобы узнать, что оно тут делает", 0, true, () => {i = 0})
  } else if (numnoti < array.length) {
    array[numnoti]()
  }
  numnoti++
}, 4000)
