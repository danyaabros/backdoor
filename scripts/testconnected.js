// Стилизация для анимации
const fireworkStyles = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;

// Создаем контейнер для анимации
const fireworkContainer = document.createElement('div');
fireworkContainer.style = fireworkStyles;
document.body.appendChild(fireworkContainer);

// Слушаем события нажатия клавиш
let pressedKeys = '';
document.addEventListener('keydown', (event) => {
  const key = event.key.toUpperCase();
  pressedKeys += key;

  // Проверяем последовательность D, E, U, S
  if (pressedKeys.includes('DEUS')) {
    // Вызываем функцию для запуска фейерверка
    launchFirework();

    // Очищаем последовательность клавиш
    pressedKeys = '';
  }
});

// Функция для запуска фейерверка
function launchFirework() {
  // Создаем элемент анимации фейерверка
  const firework = document.createElement('div');
  firework.style.width = '10px';
  firework.style.height = '10px';
  firework.style.zIndex = "9999";
  firework.style.borderRadius = '50%';
  firework.style.position = 'absolute';
  firework.style.background = 'black';  // Цвет фейерверка

  // Добавляем элемент в контейнер
  fireworkContainer.appendChild(firework);

  // Запускаем анимацию
  animateFirework(firework);
}

// Функция для анимации фейерверка
function animateFirework(firework) {
  const startX = Math.random() * window.innerWidth;
  const startY = window.innerHeight;
  const endX = Math.random() * window.innerWidth;
  const endY = Math.random() * (window.innerHeight / 2);

  firework.style.left = startX + 'px';
  firework.style.top = startY + 'px';

  // Анимация движения элемента
  const animation = firework.animate(
    [
      { transform: `translate(${startX}px, ${startY}px)` },
      { transform: `translate(${endX}px, ${endY}px)` },
    ],
    {
      duration: 1000, // Длительность анимации в миллисекундах
      easing: 'ease-out', // Тип анимации
      fill: 'forwards', // Элемент остается в конечной позиции после анимации
    }
  );

  // После завершения анимации удаляем элемент
  animation.onfinish = () => {
    firework.remove();
  };
}
