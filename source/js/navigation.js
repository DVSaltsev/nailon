let navMain = document.querySelector('.header-top__nav');
let navToggle = document.querySelector('.header-top__toggle');

// navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-top__nav--closed')) {
    navMain.classList.remove('header-top__nav--closed');
    navMain.classList.add('header-top__nav--opened');
  } else {
    navMain.classList.add('header-top__nav--closed');
    navMain.classList.remove('header-top__nav--opened');
  }
});
