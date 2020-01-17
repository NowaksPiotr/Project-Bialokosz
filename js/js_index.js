//SMOOTH SCROLL
let scrollButton = document.querySelector('.scroll__button');
let headerElement = document.querySelector('.description__mobile-logo-container');
//SMOOTH SCROLL
//FIRST GALLERY
let nextGalleryButton = document.querySelector('.gallery__button-next');
let previousGalleryButton = document.querySelector('.gallery__button-previous');
let currentPhoto = document.getElementById('first__gallery');
let photos = [
    './assets/photos/slider/boat.jpg',
    './assets/photos/slider/chairs.jpg',
    './assets/photos/slider/front.jpg',
    './assets/photos/slider/lake.jpg',
    './assets/photos/slider/winter.jpg'
];
let currentPhotoindex = 0;
//FIRST GALLERY

//***********************SMOOTH SCROLL*************************************************************
scrollButton.addEventListener('click', () => {
    headerElement.scrollIntoView({
        behavior: 'smooth'
    })
})
    //***********************SMOOTH SCROLL*************************************************************
    //***********************FIRST GALLERY*************************************************************
    nextGalleryButton.addEventListener('click', nextPhoto);
previousGalleryButton.addEventListener('click', previousPhoto);

function nextPhoto() {
    currentPhotoindex++;
    currentPhoto.src = photos[currentPhotoindex];
    if (currentPhotoindex == 5) {
        currentPhotoindex = 0;
        currentPhoto.src = photos[currentPhotoindex];
    }
}

function previousPhoto() {
    if (currentPhotoindex == 0) {
        currentPhotoindex = 5;
        currentPhoto.src = photos[currentPhotoindex];
    }
    currentPhotoindex--;
    currentPhoto.src = photos[currentPhotoindex];
}