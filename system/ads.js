/*!
 * ADS.js
 * Данный скрипт отвечает за рекламу.
 */

const adsbd = [
    {
      name: "Company",
      url: "https://deusnotam.github.io/1",
      img: "https://optim.tildacdn.com/stor6338-6434-4136-b138-613630653239/-/resize/270x/-/format/webp/14358453.png",
      text: "Здесь очень длинный рекламный текст",
    },
    {
      name: "Company1",
      url: "https://deusnotam.github.io/2",
      img: "https://optim.tildacdn.com/stor3239-6438-4764-b535-613965343136/-/resize/241x/-/format/webp/53117304.jpg",
      text: "Здесь очень длинный рекламный текст1",
    },
    {
      name: "Company2",
      url: "https://deusnotam.github.io/3",
      img: "https://optim.tildacdn.com/stor3061-3763-4435-b466-356261333234/-/resize/180x/-/format/webp/49591989.jpg",
      text: "Здесь очень длинный рекламный текст2",
    },
    {
      name: "Company3",
      url: "https://deusnotam.github.io/4",
      img: "https://optim.tildacdn.com/stor3035-3931-4561-b137-326166383139/-/resize/240x/-/format/webp/77992751.jpg",
      text: "Здесь очень длинный рекламный текст3",
    },
    {
      name: "Company4",
      url: "https://deusnotam.github.io/5",
      img: "https://optim.tildacdn.com/stor6639-3433-4261-a638-633266316237/-/resize/250x/-/format/webp/10130419.png",
      text: "Здесь очень длинный рекламный текст4",
    },
    {
      name: "Company5",
      url: "https://deusnotam.github.io/6",
      img: "https://optim.tildacdn.com/stor3533-6339-4336-b836-306461373064/-/resize/223x/-/format/webp/53384253.jpg",
      text: "Здесь очень длинный рекламный текст5",
    }
]

function getRandomAd() {
    // Получаем случайный индекс
    var randomIndex = Math.floor(Math.random() * adsbd.length);
    return adsbd.splice(randomIndex, 1)[0];
}

function insertAd() {
    // Получаем три случайные рекламы из adsbd
    var randomAd1 = getRandomAd();
    var randomAd2 = getRandomAd();
    var randomAd3 = getRandomAd();

document.head.insertAdjacentHTML('beforeend', `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    </style>
`);

document.body.insertAdjacentHTML('beforeend', `
    <div style="display: flex; flex-direction: column; align-items: center; width:100wv; height: auto; padding: 10px; margin: 0; background-color: #040404; color: white; font-family: Inter;">
  <a href="https://deusnotam.github.io" target="_blank">
    <img src="https://deusnotam.github.io/site/img/logo.jpeg" style="width: 60px;">
  </a>
  <p style="text-align: center;">D3US System - модификация упрощающая жизнь!<br>Модификация совершенно бесплатна и средства на разработку идут от рекламы, поэтому...</p>
  <p>Реклама</p>
  <div style="display: flex;">
    <a href="${randomAd1.url}" target="_blank" style="flex: 1;">
      <div style="display: flex; justify-content: center; border: 1px solid white; border-radius: 10px; padding: 10px; margin: 10px;">
        <img src="${randomAd1.img}" style="width: 200px; object-fit: cover; margin-right: 10px; border-radius: 10px;">
        <p style="color: white; text-decoration: none;">${randomAd1.text}</p>
      </div>
    </a>
    <a href="${randomAd2.url}" target="_blank" style="flex: 1;">
      <div style="display: flex; justify-content: center; border: 1px solid white; border-radius: 10px; padding: 10px; margin: 10px;">
        <img src="${randomAd2.img}" style="width: 200px; object-fit: cover; margin-right: 10px; border-radius: 10px;">
        <p style="color: white; text-decoration: none;">${randomAd2.text}</p>
      </div>
    </a>
    <a href="${randomAd3.url}" target="_blank" style="flex: 1;">
      <div style="display: flex; justify-content: center; border: 1px solid white; border-radius: 10px; padding: 10px; margin: 10px;">
        <img src="${randomAd3.img}" style="width: 200px; object-fit: cover; margin-right: 10px; border-radius: 10px;">
        <p style="color: white; text-decoration: none;">${randomAd3.text}</p>
      </div>
    </a>
  </div>
</div>
`);
}

// Случайное решение о выполнении функции
if (Math.random() > 0.5) {
    insertAd();
}
