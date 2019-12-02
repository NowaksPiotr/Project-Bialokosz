let scrollButton = document.querySelector('.scroll__button');
let headerElement = document.querySelector('.section__header');

scrollButton.addEventListener('click', function smoothScroll(){
    headerElement.scrollIntoView({
        behavior: 'smooth'
    });
});