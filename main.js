let hamburger = document.querySelector('.hamburger');
let hamburgerBar = document.querySelector('.hamburger__bar');

hamburger.addEventListener('click', openHamburgerMenu);

function openHamburgerMenu(){
    hamburgerBar.classList.toggle('hamburger__bar--active');
}