//HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const hamburgerBar = document.querySelector(".hamburger__bar");
const nav = document.querySelector(".navigation__menu");
const closeHamburgerBackground = document.querySelector(".background");
//HAMBURGER MENU

//SMOOTH SCROLL
const scrollButton = document.querySelector(".scroll__button");
const headerElement = document.querySelector(
  ".description__mobile-logo-container"
);
//SMOOTH SCROLL

//SCROLL UP BUTTON
const scrollUP = document.querySelector(".scroll-up");
const scrollUPtarget = document.querySelector(".welcome");
//SCROLL UP BUTTON

//DROPDOWN BUTTON
const dropdownButton = document.querySelectorAll(".dropdown__button-icon");
const list = document.querySelectorAll(".dropdown__elements");
//DROPDOWN BUTTON

//FIXED MENU BAR
const navContainer = document.querySelector(".navigation__container");
const navWrapper = document.querySelector(".navigation__wrapper");
const logoContainer = document.querySelector(".logo__container");
const logoImage = document.querySelector(".logo__bialokosz");

//SIDE MENU
const sideMenu = document.querySelector(".side__menu");
let roomType = document.querySelectorAll(".side__menu-element");
let scrollToRoom = document.querySelectorAll(".separator");
//***********************HAMBURGER MENU*******************************************************

hamburger.addEventListener("click", openHamburgerMenu);
closeHamburgerBackground.addEventListener("click", hamburgerClose);

function openHamburgerMenu() {
  hamburgerBar.classList.toggle("hamburger__bar--active");
  nav.classList.toggle("navigation__menu--active");
  closeHamburgerBackground.classList.toggle("background--active");
}

function hamburgerClose() {
  hamburgerBar.classList.remove("hamburger__bar--active");
  nav.classList.remove("navigation__menu--active");
  closeHamburgerBackground.classList.remove("background--active");
}

//***********************HAMBURGER MENU*******************************************************

//*************************FIXED MENU AND SCROLL UP*******************************************
function scrolling() {
  let scrollPosition = window.scrollY;
  if (scrollPosition >= 680) {
    navContainer.classList.add("navigation__container-fixed");
    navWrapper.classList.add("navigation__wrapper-fixed");
    logoContainer.classList.add("logo__container-fixed");
    logoImage.classList.add("logo__bialokosz-fixed");
    if (sideMenu) {
      sideMenu.classList.add("side__menu--active");
    }
  } else {
    navContainer.classList.remove("navigation__container-fixed");
    navWrapper.classList.remove("navigation__wrapper-fixed");
    logoContainer.classList.remove("logo__container-fixed");
    logoImage.classList.remove("logo__bialokosz-fixed");
    if (sideMenu) {
      sideMenu.classList.remove("side__menu--active");
    }
  }
  if (scrollPosition >= 1750) {
    scrollUP.classList.add("scroll-up__show");
  } else {
    scrollUP.classList.remove("scroll-up__show");
  }
}
window.addEventListener("scroll", scrolling);
//*************************FIXED MENU AND SCROLL UP*******************************************

//***********************SMOOTH SCROLL********************************************************
scrollButton.addEventListener("click", () => {
  headerElement.scrollIntoView({
    behavior: "smooth",
  });
});
roomType.forEach(function scrollMe(pageRoom, index) {
  roomType[index].addEventListener("click", () => {
  console.log(window.scrollY);
    scrollToRoom[index].scrollIntoView({
      behavior: "smooth",
    });
  });
});
//***********************SMOOTH SCROLL********************************************************
//***********************SMOOTH SCROLL UP*****************************************************

scrollUP.addEventListener("click", () => {
  scrollUPtarget.scrollIntoView({
    behavior: "smooth",
  });
});
//***********************SMOOTH SCROLL UP******************************************************

//***********************DROPDOWN BUTTON******************************************************
//If dropdownButton is availavle function is started
if (dropdownButton) {
  dropdownButton.forEach(function (dropdownicon, index) {
    dropdownicon.addEventListener("click", () => {
      dropdownicon.classList.toggle("dropdown__button-icon--rotate");
      list[index].classList.toggle("dropdown__list-hidden");
      list[index].classList.toggle("services__wrapper--special");
    });
  });
}
//***********************DROPDOWN BUTTON******************************************************
