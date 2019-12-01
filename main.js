let hamburger = document.querySelector('.hamburger');
let hamburgerBar = document.querySelector('.hamburger__bar');
let nav = document.querySelector('.nav');

hamburger.addEventListener('click', openHamburgerMenu);

function openHamburgerMenu() {
    hamburgerBar.classList.toggle('hamburger__bar--active');
    nav.classList.toggle('nav--active');
}
