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
document.body.appendChild(p);  // Добавляем элемент <p> в DOM
