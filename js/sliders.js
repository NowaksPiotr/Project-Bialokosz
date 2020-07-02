// Slide and buttons
const photoWrapper = document.querySelectorAll(".photos__wrapper");
const buttonPrevious = document.querySelectorAll(".gallery__button-previous");
const buttonNext = document.querySelectorAll(".gallery__button-next");

// Variables
let counter = 0;
let noclegi = document.querySelector(".noclegi");
// Interval
let intervalID = setInterval(changePhoto, 8000);
let flag = true;

//Photos
let allPhotos = [{
  siteName: 'index',
  folderName: [1,2,3],
  slider: [[1,2,3,4,5,6,7,8,9,10],[1,2,3,4],[1,2,3]],
}];  
/*********************************************************/
console.log(allPhotos[0].slider[1].length); 
buttonNext.forEach(function (nextButton, index) {
  nextButton.addEventListener("click", nextPhoto);
  function nextPhoto() {
    let photo = document.querySelectorAll(".slide__photos-bialokosz");
    let newPhoto = document.createElement("img");
    counter++;
    if(counter > allPhotos[0].slider[index].length-1){
      counter = 0;
    }
    photo[index].remove();
    newPhoto.setAttribute("class", "slide__photos-bialokosz");
    newPhoto.setAttribute(
      "src",
      "./assets/photos/slider/index/" + allPhotos[0].folderName[index] + '/' + allPhotos[0].slider[index][counter] + ".jpg"
    );
    console.log(newPhoto);
    photoWrapper[index].append(newPhoto);
    clearInterval(intervalID);
    flag = false;
    checkInterval();
    }
  }
);
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
    if(noclegi){
      newPhoto.setAttribute(
        "src",
        "./assets/photos/slider/noclegi/" + photosArray[1][counter] + ".jpg"
      );
    }else{
      newPhoto.setAttribute(
      "src",
      "./assets/photos/slider/" + photosArray[0][counter] + ".jpg"
    );
      }
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
function changePhoto() {
  counter++;
  if (counter == 10) {
    counter= 0;
  }
  photoWrapper.forEach(function changing(photosWrapper, index){
      let photo = document.querySelectorAll(".slide__photos-bialokosz");
      let newPhoto = document.createElement("img");
      photo[index].remove();
      newPhoto.setAttribute("class", "slide__photos-bialokosz");
      if(noclegi){
      newPhoto.setAttribute(
        "src",
        "./assets/photos/slider/noclegi/" + photosArray[1][counter] + ".jpg");
      }else{
      newPhoto.setAttribute(
        "src",
        "./assets/photos/slider/" + photosArray[0][counter] + ".jpg"
      );
      }
      photosWrapper.append(newPhoto);
    })}