/* в этот файл добавляет скрипты*/

/* Бургер-меню */
const navToggle = document.querySelector('.main-header__toggle');
const navList = document.querySelector('.main-header__nav-list');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('main-header__toggle--open');
  navList.classList.toggle('main-header__nav-list--open');
});
