/*!
 * Noti
 * Данный скрипт отвечает за вывод уведомлений на сайте.
 */

const notis = new abrosnoti(document.querySelector(".abrosnoti"))
const message = [DeusSiteInfo.noti_array];
let i = 1;
message[0]()
setInterval(()=>{
  if (i == message.length) {
    notis.create("Demo done", "click on this notification to restart the demo or go look at the code if you're interested", 0, true, () => {i = 0})
  } else if (i < message.length) {
    message[i]()
  }
  i++
}, 4000)
