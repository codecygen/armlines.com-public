var navContainer = document.querySelector("nav");

var navToggleButton1 = document.querySelectorAll(".nav-btn")[0];
var navToggleButton2 = document.querySelectorAll(".nav-btn")[1];

navToggleButton1.addEventListener("click", navMenu);
navToggleButton2.addEventListener("click", navMenu);

function navMenu() {
  navContainer.classList.toggle("nav-display");
  document.body.classList.toggle("body-no-scroll");

  // This section is to prevent instant clicking on the close nav button before the animation is completed.
  setTimeout(function() {document.body.style.pointerEvents = "none";}, 2);
  setTimeout(function() {document.body.style.pointerEvents = "auto";}, 800);
}

let timer = null;
let header = document.getElementsByTagName("header")[0]

window.addEventListener("scroll", function(e) {
  if(timer !== null) {
    header.classList.add("header-scrolled");
    clearTimeout(timer);
  }

  timer = setTimeout(function() {
    header.classList.remove("header-scrolled");
  }, 200);

});


// THIS BLOCK OF CODE ONLY CHECKS IF THE SCROLLING IS NOT STARTED AND SCROLLING LEVEL IS THE TOP OF THE PAGE. IF NOT IT ADDS OR REMOVES A CLASS.
// window.onscroll = changeNavColor;
// let header = document.getElementsByTagName("header")[0]
//
// function changeNavColor() {
//   if (document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0) {
//     header.classList.add("header-scrolled");
//   } else {
//     header.classList.remove("header-scrolled");
//   }
// }
