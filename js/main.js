//HAMBURGER MENU
let hamburger = document.querySelector('.hamburger__wrapper');
let hamburgerBar = document.querySelector('.hamburger__bar');
let nav = document.querySelector('.navigation__menu');
const closeHamburgerBackground = document.querySelector('.background');
//HAMBURGER MENU
//SMOOTH SCROLL
let scrollButton = document.querySelector('.scroll__button');
let headerElement = document.querySelector('.description__mobile-logo-container');
//SMOOTH SCROLL

//***********************HAMBURGER MENU************************************************************

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

//***********************HAMBURGER MENU************************************************************
//***********************SMOOTH SCROLL*************************************************************

scrollButton.addEventListener('click', () => {
    headerElement.scrollIntoView({
        behavior: 'smooth'
    })
})
//***********************SMOOTH SCROLL*************************************************************