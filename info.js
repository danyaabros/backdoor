// Создаем элементы
const d3usnotamBlockerA = document.createElement('a');
const d3usn0tamBlockerDiv1 = document.createElement('div');
const d3usn0tamBlockerDiv2 = document.createElement('div');
const d3usn0tamBlockerDiv3 = document.createElement('div');
const d3usn0tamBlockerSpan = document.createElement('span');
const d3usn0tamBlockerImg = document.createElement('img');

// Общее тело
d3usnotamBlockerA.href = 'https://deusnotam.github.io';

// Обертка
d3usn0tamBlockerDiv1.style.position = 'fixed';
d3usn0tamBlockerDiv1.style.top = '0';
d3usn0tamBlockerDiv1.style.left = '50%';
d3usn0tamBlockerDiv1.style.transform = 'translateX(-50%)';
d3usn0tamBlockerDiv1.style.display = 'flex';
d3usn0tamBlockerDiv1.style.zIndex = '9999999999';

// Логотип
d3usn0tamBlockerImg.src = 'https://deusnotam.github.io/site/img/logo.jpeg';
d3usn0tamBlockerImg.style.width = '50px';
d3usn0tamBlockerImg.style.height = '50px';
d3usn0tamBlockerImg.style.position = 'absolute';
d3usn0tamBlockerImg.style.transform = 'translateX(-50%)';
d3usn0tamBlockerImg.style.zIndex = '2';
d3usn0tamBlockerImg.style.borderRadius = '10px';

// Круг, подложка
d3usn0tamBlockerDiv3.style.backgroundColor = '#040404';
d3usn0tamBlockerDiv3.style.width = '500px';
d3usn0tamBlockerDiv3.style.height = '400px';
d3usn0tamBlockerDiv3.style.position = 'absolute';
d3usn0tamBlockerDiv3.style.transform = 'translateX(-50%)';
d3usn0tamBlockerDiv3.style.top = '-260px';
d3usn0tamBlockerDiv3.style.borderRadius = '50%';
d3usn0tamBlockerDiv3.style.zIndex = '1';
d3usn0tamBlockerDiv3.style.border = '1px solid white';

// Текст
d3usn0tamBlockerSpan.style.color = 'white';
d3usn0tamBlockerSpan.style.zIndex = '2';
d3usn0tamBlockerSpan.style.position = 'absolute';
d3usn0tamBlockerSpan.style.transform = 'translateX(-50%)';
d3usn0tamBlockerSpan.style.width = '350px';
d3usn0tamBlockerSpan.style.textAlign = 'center';
d3usn0tamBlockerSpan.style.fontFamily = 'Comfortaa, cursive';
d3usn0tamBlockerSpan.style.top = '50px';
d3usn0tamBlockerSpan.innerHTML = 'Данный сайт заблокирован системой<br>D3usN0tam<br>Подробности на сайте';

// Обертка для текста с подложкой на анимацию
d3usn0tamBlockerDiv2.style.position = 'absolute';
d3usn0tamBlockerDiv2.style.top = '0';

// Добавляем элементы в DOM
document.body.appendChild(d3usnotamBlockerA);
d3usnotamBlockerA.appendChild(d3usn0tamBlockerDiv1);
d3usn0tamBlockerDiv1.appendChild(d3usn0tamBlockerDiv2);
d3usn0tamBlockerDiv2.appendChild(d3usn0tamBlockerDiv3);
d3usn0tamBlockerDiv2.appendChild(d3usn0tamBlockerSpan);
d3usn0tamBlockerDiv1.appendChild(d3usn0tamBlockerImg);
