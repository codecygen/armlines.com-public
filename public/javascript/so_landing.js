// Landing Page Circulating Photo Show
photoList = document.getElementById("landing-js").innerText.split(",");

function randomizePhotoList(photoList) {
  let randomList = [];

  for(p = photoList.length; p > 0; p--) {

    let randomNumber = Math.floor((Math.random() * p));
    randomList.push("/pictures/products/" + photoList[randomNumber]);
    photoList.splice(randomNumber, 1);
  }

  return randomList;
}

const randomPhotoList = randomizePhotoList(photoList);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function landingSectionSlide(randPhotoList) {
  while(true){
    for(p = 0; p < randomPhotoList.length; p++){
      // $("#landing-img").fadeTo(250, 1);
      $("#landing-img").fadeTo(500, 1);
      document.getElementById("landing-img").setAttribute("src", randPhotoList[p]);
      await sleep(3000);
      $("#landing-img").fadeTo(500, 0);
      await sleep(500);


    }
  }
}

landingSectionSlide(randomPhotoList);
