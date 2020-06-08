// Slide and buttons
const photoWrapper = document.querySelector(".photos__wrapper");
const buttonPrevious = document.querySelectorAll(".gallery__button-previous");
const buttonNext = document.querySelectorAll(".gallery__button-next");

// Nie wiem co
let counter = 0;
let photosArray = [1,2,3,4,5,6,7,8,9,10];

/*********************************************************/

buttonNext.forEach(function(nextButton, index){
  nextButton.addEventListener("click", nextPhoto);
  function nextPhoto() {
    let photo = document.querySelector(".slide__photos-bialokosz");
    let newPhoto = document.createElement("img");
    counter++;
    if(counter == 10){
      counter = 0;
    }
    photo.remove();
    newPhoto.setAttribute("class", "slide__photos-bialokosz");
    newPhoto.setAttribute("src", "./assets/photos/slider/" + photosArray[counter] + ".jpg");
    photoWrapper.append(newPhoto);
  }
})
buttonPrevious.forEach(function(previousButton, index){
previousButton.addEventListener("click", previousPhoto);
function previousPhoto() {
  let photo = document.querySelector(".slide__photos-bialokosz");
  let newPhoto = document.createElement("img");
  counter--;
  if(counter < 0){
    counter = 9;
  }
  console.log(counter);
  photo.remove();
  newPhoto.setAttribute("class", "slide__photos-bialokosz");
  newPhoto.setAttribute("src", "./assets/photos/slider/" + photosArray[counter] + ".jpg");
  photoWrapper.append(newPhoto);
}
})

