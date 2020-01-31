//HAMBURGER MENU
const hamburger = document.querySelector('.hamburger__wrapper');
const hamburgerBar = document.querySelector('.hamburger__bar');
const nav = document.querySelector('.navigation__menu');
const closeHamburgerBackground = document.querySelector('.background');
//HAMBURGER MENU
//SMOOTH SCROLL
const scrollButton = document.querySelector('.scroll__button');
const headerElement = document.querySelector('.description__mobile-logo-container');
//SMOOTH SCROLL
//DROPDOWN BUTTON
const dropdownButton = document.querySelector('.test');
const lista = document.querySelector('.testlist');
const dropdownButtonFirst = document.getElementById('dropdown__first');
const dropdownButtonSecond = document.getElementById('dropdown__second');

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
//***********************DROPDOWN BUTTON***********************************************************
dropdownButton.addEventListener('click', ()=>{
    lista.classList.toggle('service__list-terms--inner-active');
})
//***********************DROPDOWN BUTTON***********************************************************