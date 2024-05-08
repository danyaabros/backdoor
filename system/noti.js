/*!
 * Noti
 * Данный скрипт отвечает за вывод уведомлений на сайте.
 */

const notis = new abrosnoti(document.querySelector(".abrosnoti"));
const message = DeusSiteInfo.noti_array;
// let number = 0;
// setInterval(() => {
//   if (number === message.length) {
//     notis.create("Deus System", "Кликни на уведомление, чтобы узнать, что оно тут делает.", 0, true, () => {number = 0});
//   } else if (number < message.length) {
//     message[number]();
//   }
//   number++;
// }, 4000);

if (Array.isArray(DeusSiteInfo.noti_array)) {
    // Перебираем каждый элемент массива
    DeusSiteInfo.noti_array.forEach(element => {
        // Проверяем, является ли текущий элемент функцией
        if (typeof element === 'function') {
            console.log('Элемент массива является функцией');
        } else {
            console.log('Элемент массива не является функцией');
        }
    });
} else {
    console.log('DeusSiteInfo.noti_array не является массивом');
}
