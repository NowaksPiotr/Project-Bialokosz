// Slide and buttons
const photoWrapper = document.querySelectorAll(".photos__wrapper");
const buttonPrevious = document.querySelectorAll(".gallery__button-previous");
const buttonNext = document.querySelectorAll(".gallery__button-next");

// Variables
let counter = 0;
//WHICH SITE RECOGNITION
let documentTitle = document.title;
// Interval
let intervalID = setInterval(changePhoto, 4000);
let flag = true;

//Photos
let allPhotos = [
  {
    siteName: "Pałac Białokosz",
    folderName: [1, 2, 3],
    slider: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4],
      [1, 2, 3],
    ],
  },
  {
    siteName: "Noclegi Pałac Białokosz",
    folderName: [1, 2, 3, 4, 5],
    slider: [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
    ],
  },
  {
    siteName: "Restauracja Pałac Białokosz",
    folderName: [1,2,3],
    slider: [
      [1,2,3,4,5,6,7,8,9,10],
      [1,2,3,4,5],
      [1,2,3]
    ]
  },
  {
    siteName: "Wesele Pałac Białokosz",
    folderName: [1],
    slider: [
      [1,2,3,4,5,6,7,8,9,10,11,12,13]
    ]
  }
];
/*********************************************************/
buttonNext.forEach(function (nextButton, index) {
  nextButton.addEventListener("click", nextPhoto);
  function nextPhoto() {
    let photo = document.querySelectorAll(".slide__photos-bialokosz");
    let newPhoto = document.createElement("img");
    counter++;
    photo[index].remove();
    newPhoto.setAttribute("class", "slide__photos-bialokosz");
    if (allPhotos[0].siteName === documentTitle) {
      if (counter > allPhotos[0].slider[index].length - 1) {
        counter = 0;
      }
      newPhoto.setAttribute(
        "src",
        "./assets/photos/slider/index/" +
          allPhotos[0].folderName[index] +
          "/" +
          allPhotos[0].slider[index][counter] +
          ".jpg"
      );
    } else if (allPhotos[1].siteName === documentTitle) {
      if (counter > allPhotos[1].slider[index].length - 1) {
        counter = 0;
      }
      newPhoto.setAttribute(
        "src",
        "./assets/photos/slider/noclegi/" +
          allPhotos[1].folderName[index] +
          "/" +
          allPhotos[1].slider[index][counter] +
          ".jpg"
      );
    }else if (allPhotos[2].siteName === documentTitle) {
      if (counter > allPhotos[2].slider[index].length - 1) {
        counter = 0;
      }
      newPhoto.setAttribute(
        "src",
        "./assets/photos/slider/restauracja/" +
          allPhotos[2].folderName[index] +
          "/" +
          allPhotos[2].slider[index][counter] +
          ".jpg"
      );
    }else if(allPhotos[3].siteName === documentTitle) {
      if (counter > allPhotos[3].slider[index].length - 1) {
        counter = 0;
      }
      newPhoto.setAttribute(
        "src",
        "./assets/photos/slider/wesele/" +
          allPhotos[3].folderName[index] +
          "/" +
          allPhotos[3].slider[index][counter] +
          ".jpg"
      );
    }
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
    photo[index].remove();
    newPhoto.setAttribute("class", "slide__photos-bialokosz");
    if (allPhotos[0].siteName === documentTitle) {
      if (counter < 0) {
        counter = allPhotos[0].slider[index].length - 1;
      }
      newPhoto.setAttribute(
        "src",
        "./assets/photos/slider/index/" +
          allPhotos[0].folderName[index] +
          "/" +
          allPhotos[0].slider[index][counter] +
          ".jpg"
      );
    } else if (allPhotos[1].siteName === documentTitle) {
      if (counter < 0) {
        counter = allPhotos[1].slider[index].length - 1;
      }
      newPhoto.setAttribute(
        "src",
        "./assets/photos/slider/noclegi/" +
          allPhotos[1].folderName[index] +
          "/" +
          allPhotos[1].slider[index][counter] +
          ".jpg"
      );
    }else if (allPhotos[2].siteName === documentTitle) {
      if (counter < 0) {
        counter = allPhotos[2].slider[index].length - 1;
      }
      newPhoto.setAttribute(
        "src",
        "./assets/photos/slider/restauracja/" +
          allPhotos[2].folderName[index] +
          "/" +
          allPhotos[2].slider[index][counter] +
          ".jpg"
      );
    }else if(allPhotos[3].siteName === documentTitle) {
      if (counter < 0) {
        counter = allPhotos[3].slider[index].length - 1;
      }
      newPhoto.setAttribute(
        "src",
        "./assets/photos/slider/wesele/" +
          allPhotos[3].folderName[index] +
          "/" +
          allPhotos[3].slider[index][counter] +
          ".jpg"
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
    intervalID = setInterval(changePhoto, 4000);
  }
}
function changePhoto() {
  counter++;
  photoWrapper.forEach(function changing(photosWrapper, index) {
    if (allPhotos[0].siteName === documentTitle) {
      if (counter > allPhotos[0].slider[index].length - 1) {
        counter = 0;
      }
    } else if (allPhotos[1].siteName === documentTitle) {
      if (counter > allPhotos[1].slider[index].length - 1) {
        counter = 0;
      }
    }else if(allPhotos[2].siteName === documentTitle) {
      if (counter > allPhotos[2].slider[index].length - 1) {
        counter = 0;
      }
    }else if(allPhotos[3].siteName === documentTitle) {
      if (counter > allPhotos[3].slider[index].length - 1) {
        counter = 0;
      }
    }
    let photo = document.querySelectorAll(".slide__photos-bialokosz");
    let newPhoto = document.createElement("img");
    photo[index].remove();
    newPhoto.setAttribute("class", "slide__photos-bialokosz");
    if(allPhotos[0].siteName === documentTitle){
    newPhoto.setAttribute(
      "src",
      "./assets/photos/slider/index/" +
        allPhotos[0].folderName[index] +
        "/" +
        allPhotos[0].slider[index][counter] +
        ".jpg"
    );
    }else if(allPhotos[1].siteName === documentTitle){
      newPhoto.setAttribute(
        "src",
        "./assets/photos/slider/noclegi/" +
          allPhotos[1].folderName[index] +
          "/" +
          allPhotos[1].slider[index][counter] +
          ".jpg"
      );
    }else if(allPhotos[2].siteName === documentTitle){
      newPhoto.setAttribute(
        "src",
        "./assets/photos/slider/restauracja/" +
          allPhotos[2].folderName[index] +
          "/" +
          allPhotos[2].slider[index][counter] +
          ".jpg"
      );
    }else if(allPhotos[3].siteName === documentTitle){
      newPhoto.setAttribute(
        "src",
        "./assets/photos/slider/wesele/" +
          allPhotos[3].folderName[index] +
          "/" +
          allPhotos[3].slider[index][counter] +
          ".jpg"
      );
    }
    photosWrapper.append(newPhoto);
  });
}
