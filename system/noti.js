/*!
 * Noti
 * Данный скрипт отвечает за вывод уведомлений на сайте.
 */

const notis = new abrosnoti(document.querySelector(".abrosnoti"));
const message = DeusSiteInfo.noti_array;
let i = 0;
message[0]()
setInterval(()=>{
  if (i == message.length) {
    notis.create("Deus System", "Кликни на уведомление, чтобы узнать, что оно тут делает.", 0, true, () => {i = 0})
  } else if (i < message.length) {
    message[i]()
  }
  i++
}, 4000)
