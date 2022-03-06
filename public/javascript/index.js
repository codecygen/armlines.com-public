
let links = {
  0: document.getElementsByClassName("link-index"),
  1: "/",

  2: document.getElementsByClassName("link-collection"),
  3: "/collection",

  4: document.getElementsByClassName("link-store"),
  5: "/store",

  6: document.getElementsByClassName("link-contact"),
  7: "/contact",

  8: document.getElementsByClassName("link-linkedin"),
  9: "https://www.linkedin.com/",

  10: document.getElementsByClassName("link-facebook"),
  11: "https://www.facebook.com/",

  12: document.getElementsByClassName("link-twitter"),
  13: "https://www.twitter.com/",

  14: document.getElementsByClassName("link-instagram"),
  15: "https://www.instagram.com/",

  16: document.getElementsByClassName("link-designer"),
  17: "https://www.codecygen.com/"
}

let i;

function assignLinks(domObj, domLink) {
  for(i = 0; i < domObj.length; i++) {
    domObj[i].setAttribute("href", domLink);
  }
}

let k = 0;

for(k = 0; k < Object.keys(links).length; k += 2) {
  assignLinks(links[k], links[k + 1]);
}


// window.onresize = displayEmailAddress;
// window.onload = displayEmailAddress;
//
// function displayEmailAddress() {
//   if (window.innerWidth < 340) {
//      document.querySelectorAll(".email")[0].innerHTML = "hello@<br>armlines.com";
//      document.querySelectorAll(".email")[1].innerHTML = "hello@<br>armlines.com";
//      document.querySelectorAll(".email")[2].innerHTML = "hello@<br>armlines.com";
//   } else {
//      document.querySelectorAll(".email")[0].innerHTML = "hello@armlines.com";
//      document.querySelectorAll(".email")[1].innerHTML = "hello@armlines.com";
//      document.querySelectorAll(".email")[2].innerHTML = "hello@armlines.com";
//   }
// }
