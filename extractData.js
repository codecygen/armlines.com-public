// jshint esversion:6

// This file returns "files" object which contains
// all the picture file names under __dirname + "/public/pictures"

const fs = require("fs");
const dir = __dirname + "/public/pictures/products";
const file = __dirname + "/public/json-data/productData.json";

fs.readdir(dir, function(err, files) {
  exports.getProductPhotoList = function() {
    if(err)
      console.log(err);
    else
      return files;
  }
});


fs.readFile(file, function(err, data) {
  exports.getProductDataList = function() {
    if(err)
      console.log(err);
    else {
      let comments = JSON.parse(data);
      return comments;
    }
  }
});
