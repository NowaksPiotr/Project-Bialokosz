let hamburger = document.querySelector('.hamburger');
let hamburgerBar = document.querySelector('.hamburger__bar');
let nav = document.querySelector('.nav');
let welcomeMobileLogo = document.getElementById("mobileLogo");

hamburger.addEventListener('click', openHamburgerMenu);

function openHamburgerMenu() {
    hamburgerBar.classList.toggle('hamburger__bar--active');
    nav.classList.toggle('nav--active');
}

setInterval(function welcome(){
    welcomeMobileLogo.classList.remove('logo__hidden');
    welcomeMobileLogo.classList.add('index-logo__bialokosz__mobile');
}, 800)