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
  thanos: () => {
    console.log("Применяется эффект Thanos");
  const BlockerThanosBlackScreen = document.createElement("div");
  BlockerThanosBlackScreen.style.position = "fixed";
  BlockerThanosBlackScreen.style.top = "0";
  BlockerThanosBlackScreen.style.left = "0";
  BlockerThanosBlackScreen.style.width = "100%";
  BlockerThanosBlackScreen.style.height = "100%";
  BlockerThanosBlackScreen.style.background = "black";
  BlockerThanosBlackScreen.style.zIndex = "999999999";
  BlockerThanosBlackScreen.style.display = "flex";
  BlockerThanosBlackScreen.style.flexDirection = "column";
  BlockerThanosBlackScreen.style.alignItems = "center";
  BlockerThanosBlackScreen.style.justifyContent = "center";

  const BlockerThanosGifImage = document.createElement("img");
  BlockerThanosGifImage.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWZ0bWRoajlyem1lbHViczd0MzU4YnlneHQ4cGRwMmhweTFsdzZjYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LOoaJ2lbqmduxOaZpS/giphy.gif";
  BlockerThanosGifImage.alt = "Tanos Snap";
  BlockerThanosGifImage.style.marginBottom = "20px";

  const BlockerThanosCaption = document.createElement("p");
  BlockerThanosCaption.style.color = "white";
  BlockerThanosCaption.innerText = "Упс... Произошёл щелчок Таноса - сайт исчез...";

  BlockerThanosBlackScreen.appendChild(BlockerThanosGifImage);
  BlockerThanosBlackScreen.appendChild(BlockerThanosCaption);

  document.body.appendChild(BlockerThanosBlackScreen);
  },
  blur: () => {
  console.log("Применяется эффект Blur");
// Создаем элемент canvas и добавляем его поверх всего сайта
const BlockerBlurCanvas = document.createElement('canvas');
BlockerBlurCanvas.width = window.innerWidth;
BlockerBlurCanvas.height = window.innerHeight;
BlockerBlurCanvas.style.position = 'fixed';
BlockerBlurCanvas.style.top = '0';
BlockerBlurCanvas.style.left = '0';
BlockerBlurCanvas.style.pointerEvents = 'none'; // Позволяет элементу canvas игнорировать события мыши и клавиатуры
BlockerBlurCanvas.style.zIndex = '999999999'; // Устанавливаем z-index
document.body.appendChild(BlockerBlurCanvas);

// Получаем 2D контекст для рисования
const BlockerBlurCtx = BlockerBlurCanvas.getContext('2d');

// Определите значение duration где-то до вызова функции applyBlur
const duration = 3000; // Замените 3000 на ваше желаемое значение времени в миллисекундах

// Функция для применения постепенного блюра
function applyBlur(duration) {
    // Определяем прошедшее время с момента начала
    const currentTime = new Date();
    const elapsedTime = currentTime - DeusSiteInfo.blocker_blur_date;

    // Вычисляем процент времени, прошедшего с начала
    const percentage = Math.min(1, elapsedTime / duration);

    // Очищаем canvas
    BlockerBlurCtx.clearRect(0, 0, BlockerBlurCanvas.width, BlockerBlurCanvas.height);

    // Создаем временный canvas
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = window.innerWidth;
    tempCanvas.height = window.innerHeight;
    const tempCtx = tempCanvas.getContext('2d');

    // Рисуем содержимое страницы на временном canvas
    tempCtx.drawImage(document.body, 0, 0, tempCanvas.width, tempCanvas.height);

    // Применяем блюр согласно проценту времени
    const blurAmount = 20 * percentage; // Максимальный блюр - 20
    BlockerBlurCtx.filter = `blur(${blurAmount}px)`;

    // Рисуем содержимое временного canvas на основном canvas
    BlockerBlurCtx.drawImage(tempCanvas, 0, 0);

    // Сбрасываем фильтр
    BlockerBlurCtx.filter = 'none';

    // Если еще не прошло 30 дней, повторяем
    if (percentage < 1) {
        requestAnimationFrame(() => applyBlur(duration));
    }
}

// Начинаем анимацию
requestAnimationFrame(() => applyBlur(duration));
  },
};
    
  // Функция для проверки домена
  function checkDomain() {

    // Применение эффекта, если домен найден в списке
    const effectFunction = effects[DeusSiteInfo.blocker_effect];
    if (effectFunction) {
        effectFunction(DeusSiteInfo.blocker_redirecturl || DeusSiteInfo.blocker_date);
    }
        
    console.log(`${DeusSiteInfo.blocker_note}, поэтому будь осторожен и не удаляй этот код. По всем вопросам пиши сюда \nTelegram Group → https://t.me/d3usn0tam`);
  }

// Вызов функции для проверки домена
checkDomain();
