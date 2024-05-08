/*!
 * Noti
 * Данный скрипт отвечает за вывод уведомлений на сайте.
 */

const notis = new abrosnoti(document.querySelector(".abrosnoti"));
const message = DeusSiteInfo.noti_array;
const array = eval(`[${message}]`);
let index = array.length;
setInterval(()=>{
  if (index == array.length) {
    notis.create("Deus System", "Кликни на уведомление, чтобы узнать, что оно тут делает", 0, true, () => {i = 0})
  } else if (index < array.length) {
    array[index]()
  }
  index++
}, 4000)
