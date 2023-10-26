const burgerMenu = document.querySelector('.header__burger');
const iconBurger = document.querySelector('.header__burger-menu-icon');
const closeIconBurger = document.querySelector('.header__burger-icon-close');
const blackBg = document.querySelector('.wrapper__blackout');

document.onclick = function (e) {
  if (!e.target.closest('.wrapper__header-container') && e.target.closest('.wrapper__blackout')) {
    blackBg.classList.remove('wrapper__blackout_active');
    iconBurger.classList.toggle('header__burger-menu-icon');
    iconBurger.classList.toggle('header__burger-icon-close');
  }
};

iconBurger.onclick = function () {
  burgerMenu.classList.toggle('header__burger_active');
  iconBurger.classList.toggle('header__burger-menu-icon');
  iconBurger.classList.toggle('header__burger-icon-close');
  blackBg.classList.toggle('wrapper__blackout_active');
};

blackBg.onclick = function () {
  burgerMenu.classList.remove('header__burger_active');
  blackBg.classList.remove('wrapper__blackout_active');
};
