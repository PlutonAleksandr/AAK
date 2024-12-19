// document.addEventListener('DOMContentLoaded', function() {
//     const burgerMenu = document.getElementById('burger-menu');
//     const nav = document.querySelector('nav');

//     burgerMenu.addEventListener('click', function() {
//         nav.classList.toggle('active');
//         burgerMenu.classList.toggle('open');
//     });
// });


// Получаем элемент бургерного меню
const burgerMenu = document.getElementById('burger-menu');

// Получаем элемент навигационного меню
const menu = document.querySelector('.menu');

// Добавляем обработчик события клика на бургерное меню
burgerMenu.addEventListener('click', () => {
  // Переключаем класс 'show' на элементе меню, чтобы показать/скрыть его
  menu.classList.toggle('show');

  // Добавляем/удаляем класс 'open' на элементе бургерного меню, чтобы изменить его внешний вид
  burgerMenu.classList.toggle('open');
});