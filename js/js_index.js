// GALLERY
let nextGalleryButton = document.querySelector('.gallery__button-next');
let previousGalleryButton = document.querySelector('.gallery__button-previous');
const galleryPhotoWrapper = document.getElementById('gallery__first-wrapper');
let firstGalleryPhotos = [
    './assets/photos/slider/boat.jpg',
    './assets/photos/slider/chairs.jpg',
    './assets/photos/slider/front.jpg',
    './assets/photos/slider/lake.jpg',
    './assets/photos/slider/winter.jpg'
];
let currentPhotoindex = 0;
// GALLERY

//***********************FIRST GALLERY*************************************************************
nextGalleryButton.addEventListener('click', nextPhoto);
previousGalleryButton.addEventListener('click', previousPhoto);

function nextPhoto() {
    let currentPhoto = document.getElementById('gallery__first');
    let newPhoto = document.createElement('img');

    currentPhotoindex++;
    if (currentPhotoindex == 5) {

        currentPhotoindex = 0;
    }
    currentPhoto.remove();
    newPhoto.setAttribute('src', firstGalleryPhotos[currentPhotoindex]);
    newPhoto.setAttribute('id', 'gallery__first');
    newPhoto.setAttribute('class', 'slide__photos-bialokosz');
    galleryPhotoWrapper.append(newPhoto);
}

function previousPhoto() {
    let currentPhoto = document.getElementById('gallery__first');
    let newPhoto = document.createElement('img');
    if (currentPhotoindex == 0) {
        currentPhotoindex = 5;
    }
    currentPhotoindex--;
    currentPhoto.remove();
    newPhoto.setAttribute('src', firstGalleryPhotos[currentPhotoindex]);
    newPhoto.setAttribute('id', 'gallery__first');
    newPhoto.setAttribute('class', 'slide__photos-bialokosz');
    galleryPhotoWrapper.append(newPhoto);
}