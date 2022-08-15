let navWrapper = document.querySelector('.header__nav-wrapper');
let navToggle = document.querySelector('.header__nav-toggle');

// navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  navWrapper.classList.toggle('header__nav--closed');
  navWrapper.classList.toggle('header__nav--opened');
});
