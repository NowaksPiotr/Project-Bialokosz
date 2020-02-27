//HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const hamburgerBar = document.querySelector('.hamburger__bar');
const nav = document.querySelector('.navigation__menu');
const closeHamburgerBackground = document.querySelector('.background');
//HAMBURGER MENU
//SMOOTH SCROLL
const scrollButton = document.querySelector('.scroll__button');
const headerElement = document.querySelector('.description__mobile-logo-container');
//SMOOTH SCROLL

//DROPDOWN BUTTON
const dropdownButton = document.querySelectorAll('.dropdown__button-icon');
const list = document.querySelectorAll('.dropdown__elements');
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
//If dropdownButton is availavle function is started
if(dropdownButton){
    dropdownButton.forEach(function(dropdownicon, index){
        dropdownicon.addEventListener('click', ()=>{
            dropdownicon.classList.toggle('dropdown__button-icon--rotate');
            list[index].classList.toggle('dropdown__list-hidden');
            list[index].classList.toggle('services__wrapper--special');
        })
    });
}
//***********************DROPDOWN BUTTON***********************************************************