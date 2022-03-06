window.onload = function () {
  $("#arrow-left").css("opacity", 0.05);
};

// arrow elements to create clicking event
const arrow = {
  left: document.getElementById("arrow-left"),
  right: document.getElementById("arrow-right")
};

let photoList = document.getElementById("image-gallery-js").innerText.split(",");
let p;

function randomizePhotoList(photoList) {
  let randomList = [];

  for(p = photoList.length; p > 0; p--) {

    let randomNumber = Math.floor((Math.random() * p));
    randomList.push("/pictures/products/" + photoList[randomNumber]);
    photoList.splice(randomNumber, 1);
  }

  return randomList;
}

const randomGalleryList = randomizePhotoList(photoList);

// <img> elements in HTML for slide animation
let slideImgContainer = document.querySelectorAll(".img-r1")[0];
let slideIMG = [];

for(let m = 0; m < randomGalleryList.length; m++) {
  let newImg = document.createElement("img");
  newImg.setAttribute("src", randomGalleryList[m]);
  newImg.setAttribute("alt", "no-gallery-img");

  slideImgContainer.appendChild(newImg);

  slideIMG[m] = document.querySelectorAll(".img-r1 img")[m];
}

let clickCounter = 0;

function slideAnimation(increment) {

  clickCounter = clickCounter + increment;

  if(clickCounter === 0){
    $("#arrow-left").animate({opacity: 0.05}, 350);
  } else if(clickCounter > 0) {
    clickCounter = 0;
  } else if(clickCounter < -1 * slideIMG.length + 1) {
    clickCounter = -1 * slideIMG.length + 1;
  } else if (clickCounter === -1 * slideIMG.length + 1) {
    $("#arrow-right").animate({opacity: 0.1}, 350);
  } else {
    $("#arrow-left").animate({opacity: 1}, 350);
    $("#arrow-right").animate({opacity: 1}, 350);
  }

  let translationX = 100 * clickCounter;

  for(let n = 0; n < slideIMG.length; n++) {
    slideIMG[n].animate([
      {transform: `translate(${translationX}%, 0)`}
    ], {
      duration: 350,
      iterationComposite: "accumulate",
      fill: "forwards",
      direction: "alternate"
    });
  }

  return clickCounter;
}

function pushIMGsLeft() {
  let increment = -1;


  slideAnimation(increment);

  return clickCounter;
}

function pushIMGsRight() {
  let increment = 1;

  slideAnimation(increment);

	return clickCounter;
}

arrow.left.addEventListener("click", arrowClicking);
arrow.right.addEventListener("click", arrowClicking);

function arrowClicking(e) {
  if(e.srcElement.id === "arrow-left") {
    pushIMGsRight();

  } else if(e.srcElement.id === "arrow-right") {
    pushIMGsLeft();
  }
}
