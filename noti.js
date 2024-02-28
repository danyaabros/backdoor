/*!
 * Noti
 * Made to protect against scammers
 * by Deus Notam
 * Telegram → https://t.me/d3usn0tam
 * Данный скрипт отвечает за вывод уведомлений на сайте.
 */

// Добавляем шрифт
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    </style>
`);

// Тело
const d3us_Noti_Body = document.createElement('div');
d3us_Noti_Body.style.fontFamily = 'Inter';
d3us_Noti_Body.style.fontSize = '16px';
d3us_Noti_Body.style.display = 'flex';
d3us_Noti_Body.style.flexDirection = 'column';
d3us_Noti_Body.style.isolation = 'isolate';
d3us_Noti_Body.style.position = 'fixed';
d3us_Noti_Body.style.top = '0.5rem';
d3us_Noti_Body.style.right = '0.5rem';
d3us_Noti_Body.style.width = '18rem';
d3us_Noti_Body.style.height = 'auto';
d3us_Noti_Body.style.background = '#29292c';
d3us_Noti_Body.style.borderRadius = '1rem';
d3us_Noti_Body.style.overflow = 'hidden';
d3us_Noti_Body.style.zIndex = '999999999999';

// Тело начало
const d3us_Noti_BodyBefore = document.createElement('div');
d3us_Noti_BodyBefore.style.position = 'absolute';
d3us_Noti_BodyBefore.style.content = '';
d3us_Noti_BodyBefore.style.inset = '0.0625rem';
d3us_Noti_BodyBefore.style.borderRadius = '0.9375rem';
d3us_Noti_BodyBefore.style.background = '#18181b';
d3us_Noti_BodyBefore.style.zIndex = '2';

// Тело конец
const d3us_Noti_BodyAfter = document.createElement('div');
d3us_Noti_BodyAfter.style.position = 'absolute';
d3us_Noti_BodyAfter.style.content = '';
d3us_Noti_BodyAfter.style.width = '0.25rem';
d3us_Noti_BodyAfter.style.inset = '0.65rem auto 0.65rem 0.5rem';
d3us_Noti_BodyAfter.style.borderRadius = '0.125rem';
d3us_Noti_BodyAfter.style.background = 'linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff)';
d3us_Noti_BodyAfter.style.transition = 'transform 300ms ease';
d3us_Noti_BodyAfter.style.zIndex = '4';

// Мэш
const d3us_Noti_BodyMesh = document.createElement('div');
d3us_Noti_BodyMesh.style.position = 'absolute';
d3us_Noti_BodyMesh.style.width = '20rem';
d3us_Noti_BodyMesh.style.height = '20rem';
d3us_Noti_BodyMesh.style.transform = 'translate(-50%, -50%)';
d3us_Noti_BodyMesh.style.background = 'radial-gradient(circle closest-side at center, white, transparent)';
d3us_Noti_BodyMesh.style.opacity = '0';
d3us_Noti_BodyMesh.style.transition = 'opacity 300ms ease';
d3us_Noti_BodyMesh.style.zIndex = '3';

// Глоу
const d3us_Noti_BodyGlow = document.createElement('div');
d3us_Noti_BodyGlow.style.position = 'absolute';
d3us_Noti_BodyGlow.style.width = '20rem';
d3us_Noti_BodyGlow.style.height = '20rem';
d3us_Noti_BodyGlow.style.transform = 'translate(-50%, -50%)';
d3us_Noti_BodyGlow.style.background = 'radial-gradient(circle closest-side at center, white, transparent)';
d3us_Noti_BodyGlow.style.opacity = '0';
d3us_Noti_BodyGlow.style.transition = 'opacity 300ms ease';
d3us_Noti_BodyGlow.style.zIndex = '1';

// Лого
const d3us_Noti_BodyLogo = document.createElement('img');
d3us_Noti_BodyLogo.src = 'https://deusnotam.github.io/site/img/logo.jpeg';
d3us_Noti_BodyLogo.style.width = '40px';
d3us_Noti_BodyLogo.style.borderRadius = '10px';
d3us_Noti_BodyLogo.style.margin = '0.65rem 0.25rem 0 1.25rem';
d3us_Noti_BodyLogo.style.transition = 'transform 300ms ease';
d3us_Noti_BodyLogo.style.zIndex = '5';

// Заголовок
const d3us_Noti_BodyTitle = document.createElement('div');
d3us_Noti_BodyTitle.textContent = DeusSiteInfo.noti_title;
d3us_Noti_BodyTitle.style.color = '#32a6ff';
d3us_Noti_BodyTitle.style.margin = '0.65rem 0.25rem 0.4rem 1.25rem';
d3us_Noti_BodyTitle.style.fontWeight = '500';
d3us_Noti_BodyTitle.style.fontSize = '1.1rem';
d3us_Noti_BodyTitle.style.transition = 'transform 300ms ease';
d3us_Noti_BodyTitle.style.zIndex = '5';

// Текст
const d3us_Noti_BodyText = document.createElement('div');
d3us_Noti_BodyText.innerHTML = DeusSiteInfo.noti_text;
d3us_Noti_BodyText.style.color = '#99999d';
d3us_Noti_BodyText.style.margin = '0 0.25rem 0.65rem 1.25rem';
d3us_Noti_BodyText.style.transition = 'transform 300ms ease';
d3us_Noti_BodyText.style.zIndex = '5';

// Анимация
d3us_Noti_Body.addEventListener('mouseover', () => {
    d3us_Noti_BodyAfter.style.transform = 'translateX(0.15rem)';
    d3us_Noti_BodyLogo.style.transform = 'translateX(0.15rem)';
    d3us_Noti_BodyTitle.style.transform = 'translateX(0.15rem)';
    d3us_Noti_BodyText.style.transform = 'translateX(0.25rem)';
    d3us_Noti_BodyMesh.style.opacity = '0.1';
    d3us_Noti_BodyGlow.style.opacity = '0.1';
});

d3us_Noti_Body.addEventListener('mouseout', () => {
    d3us_Noti_BodyAfter.style.transform = 'translateX(0)';
    d3us_Noti_BodyLogo.style.transform = 'translateX(0)';
    d3us_Noti_BodyTitle.style.transform = 'translateX(0)';
    d3us_Noti_BodyText.style.transform = 'translateX(0)';
    d3us_Noti_BodyMesh.style.opacity = '0';
    d3us_Noti_BodyGlow.style.opacity = '0';
});

// Анимация при наведении
d3us_Noti_Body.addEventListener('mouseenter', () => {
    d3us_Noti_Body.style.transition = 'right 300ms ease';
    d3us_Noti_Body.style.right = '0.5rem';
});

// Анимация при ненаведении
d3us_Noti_Body.addEventListener('mouseleave', () => {
    d3us_Noti_Body.style.transition = 'right 300ms ease';
    d3us_Noti_Body.style.right = '-17rem';
});

// Добавление анимации через 10 секунд
setTimeout(() => {
    d3us_Noti_Body.style.transition = 'right 300ms ease';
    d3us_Noti_Body.style.right = '-17rem';
}, 10000);

// Добавляем элементы в DOM
d3us_Noti_Body.appendChild(d3us_Noti_BodyBefore);
d3us_Noti_Body.appendChild(d3us_Noti_BodyAfter);
d3us_Noti_Body.appendChild(d3us_Noti_BodyMesh);
d3us_Noti_Body.appendChild(d3us_Noti_BodyGlow);
d3us_Noti_Body.appendChild(d3us_Noti_BodyLogo);
d3us_Noti_Body.appendChild(d3us_Noti_BodyTitle);
d3us_Noti_Body.appendChild(d3us_Noti_BodyText);
document.appendChild(d3us_Noti_Body);

// if the pen is in thumbnail view, scale it up
if (location.pathname.match(/fullcpgrid/i) ? true : false) {
  document.documentElement.style.fontSize = "48px"
  d3us_Noti_Body.style.display = "none"
}


let isHovering = false

d3us_Noti_Body.addEventListener("mousemove", (event) => {
  const rect = d3us_Noti_Body.getBoundingClientRect()
  const localX = (event.clientX - rect.left) / rect.width
  const localY = (event.clientY - rect.top) / rect.height
  
  d3us_Noti_BodyMesh.style.left = localX * 100 + "%"
  d3us_Noti_BodyMesh.style.top = localY * 100 + "%"
  
  d3us_Noti_BodyGlow.style.left = localX * 100 + "%"
  d3us_Noti_BodyGlow.style.top = localY * 100 + "%"
  
  if (isHovering) {
    d3us_Noti_BodyMesh.style.transition = "inset 50ms linear, opacity 300ms ease";
    d3us_Noti_BodyGlow.style.transition = "inset 50ms linear, opacity 300ms ease"
  } else {
    d3us_Noti_BodyMesh.style.transition = "opacity 300ms ease"
    d3us_Noti_BodyGlow.style.transition = "opacity 300ms ease"
  }
  
  isHovering = false
});

d3us_Noti_Body.addEventListener("mouseout", (event) => {
  isHovering = true;
})
