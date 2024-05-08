/*!
 * Noti
 * Данный скрипт отвечает за вывод уведомлений на сайте.
 */

const notis = new abrosnoti(document.querySelector(".abrosnoti"))
const message = [DeusSiteInfo.noti_array];
let number = 1;
message[0]()
setInterval(()=>{
  if (number == message.length) {
    notis.create("Demo done", "click on this notification to restart the demo or go look at the code if you're interested", 0, true, () => {number = 0})
  } else if (number < message.length) {
    message[number]()
  }
  number++
}, 4000)
