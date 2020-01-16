let hamburger = document.querySelector('.hamburger__wrapper');
let hamburgerBar = document.querySelector('.hamburger__bar');
let nav = document.querySelector('.navigation__menu');
const closeHamburgerBackground = document.querySelector('.background');

hamburger.addEventListener('click', openHamburgerMenu);
closeHamburgerBackground.addEventListener('click', hamburgerClose);

function openHamburgerMenu() {
    hamburgerBar.classList.toggle('hamburger__bar--active');
    nav.classList.toggle('navigation__menu--active');
    closeHamburgerBackground.classList.toggle('background--active');
}

function hamburgerClose() {
    hamburgerBar.classList.remove('hamburger__bar--active');
    nav.classList.remove('navigation__menu--active');
    closeHamburgerBackground.classList.remove('background--active');
}