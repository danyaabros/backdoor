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
  console.log("Применяется эффект Blur");

const BlockerBlurCanvas = document.createElement('canvas');
BlockerBlurCanvas.width = window.innerWidth;
BlockerBlurCanvas.height = window.innerHeight;
BlockerBlurCanvas.style.position = 'fixed';
BlockerBlurCanvas.style.top = '0';
BlockerBlurCanvas.style.left = '0';
BlockerBlurCanvas.style.pointerEvents = 'none';
BlockerBlurCanvas.style.zIndex = '999999999';
document.body.appendChild(BlockerBlurCanvas);

const BlockerBlurCtx = BlockerBlurCanvas.getContext('2d');

function applyBlur(duration) {
    const currentTime = new Date();
    const elapsedTime = currentTime - DeusSiteInfo.blocker_blur_date;
    const percentage = Math.min(1, elapsedTime / duration);

    BlockerBlurCtx.clearRect(0, 0, BlockerBlurCanvas.width, BlockerBlurCanvas.height);

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = window.innerWidth;
    tempCanvas.height = window.innerHeight;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.drawImage(document.body, 0, 0, tempCanvas.width, tempCanvas.height);

    const blurAmount = 20 * percentage;
    BlockerBlurCtx.filter = `blur(${blurAmount}px)`;
    
    BlockerBlurCtx.drawImage(tempCanvas, 0, 0);

    BlockerBlurCtx.filter = 'none';

    if (percentage < 1) {
        requestAnimationFrame(() => applyBlur(duration));
    }
}

const duration = 3000; // Замените 3000 на ваше желаемое значение времени в миллисекундах
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
