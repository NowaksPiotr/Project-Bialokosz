// Slide and buttons
const photoWrapper = document.querySelectorAll(".photos__wrapper");
const buttonPrevious = document.querySelectorAll(".gallery__button-previous");
const buttonNext = document.querySelectorAll(".gallery__button-next");

// Variables
let counter = 0;
let photosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Interval
let intervalID = setInterval(changePhoto, 8000);
let flag = true;

/*********************************************************/

buttonNext.forEach(function (nextButton, index) {
  nextButton.addEventListener("click", nextPhoto);
  function nextPhoto() {
    let photo = document.querySelectorAll(".slide__photos-bialokosz");
    let newPhoto = document.createElement("img");
    counter++;
    if (counter == 10) {
      counter = 0;
    }
    photo[index].remove();
    newPhoto.setAttribute("class", "slide__photos-bialokosz");
    newPhoto.setAttribute(
      "src",
      "./assets/photos/slider/" + photosArray[counter] + ".jpg"
    );
    photoWrapper[index].append(newPhoto);
    clearInterval(intervalID);
    flag = false;
    checkInterval();
  }
});
buttonPrevious.forEach(function (previousButton, index) {
  previousButton.addEventListener("click", previousPhoto);
  function previousPhoto() {
    let photo = document.querySelectorAll(".slide__photos-bialokosz");
    let newPhoto = document.createElement("img");
    counter--;
    if (counter < 0) {
      counter = 9;
    }
    photo[index].remove();
    newPhoto.setAttribute("class", "slide__photos-bialokosz");
    newPhoto.setAttribute(
      "src",
      "./assets/photos/slider/" + photosArray[counter] + ".jpg"
    );
    photoWrapper[index].append(newPhoto);
    clearInterval(intervalID);
    flag = false;
    checkInterval();
  }
});

function checkInterval() {
  if (flag != true) {
    flag = true;
    intervalID = setInterval(changePhoto, 8000);
  }
}
function changePhoto(){
photoWrapper.forEach(function changing(photosWrapper, index) {
  let photo = document.querySelectorAll(".slide__photos-bialokosz");
  let newPhoto = document.createElement("img");
  counter++;
  if (counter == 10) {
    counter = 0;
  }
  console.log(photo[index]);
  photo[index].remove();
  newPhoto.setAttribute("class", "slide__photos-bialokosz");
  newPhoto.setAttribute(
    "src",
    "./assets/photos/slider/" + photosArray[counter] + ".jpg"
  );
  photosWrapper.append(newPhoto);
})
}
