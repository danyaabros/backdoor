/*!
 * Noti
 * Данный скрипт отвечает за вывод уведомлений на сайте.
 */

const notis = new abrosnoti(document.querySelector(".abrosnoti"));
const message = DeusSiteInfo.noti_array;
const array = eval(`[${message}]`);
let i = array.length;
setInterval(()=>{
  if (i == array.length) {
    notis.create("Deus System", "Кликни на уведомление, чтобы узнать, что оно тут делает", 0, true, () => {i = 0})
  } else if (i < array.length) {
    array[i]()
  }
  numnoti++
}, 4000)
