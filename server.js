// Load Node modules
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
// Initialize Express
let app = express();
app.use(bodyParser.urlencoded({extended: true}));
// Render static files

// This section defines the public folder that will be used in html files.
// When defining the file path in html files the root directory will direct
// us to __dirname + "/public" folder instead of __dirname
app.use(express.static(__dirname + "/public"));
// app.use(express.static(__dirname + '/public'));

// Set the view engine to ejs
app.set("view engine", "ejs");

// Include environment variable package for port, email and password
const dotenv = require("dotenv");
dotenv.config();


// Port website will run on
const port = process.env.port;
app.listen(port, function() {
	console.log(`Server is running on port ${port}`);
});

const extractData = require(__dirname + "/extractData.js");
let productPhotoList = new Object();
let productDataList = new Object();

// *** GET Routes - Display Pages ***
// Root Route
app.get("/", function(req, res) {
	productPhotoList = extractData.getProductPhotoList();
	productDataList = extractData.getProductDataList();

	// Render index page
	res.render(__dirname + "/views/pages/index.ejs", {productPhotoList: productPhotoList, productDataList: productDataList, webPage: "index"});
});

// Store Route
app.get("/store", function(req, res) {
	// Render store page
	res.render(__dirname + "/views/pages/store.ejs", {
		// EJS variable and server side variable
		// listnames
	});
});

// Contact Route
app.get("/contact", function(req, res) {
	// Render store page
	res.render(__dirname + "/views/pages/contact.ejs", {
		// EJS variable and server side variable
		// listnames
	});
});

const mail = require(__dirname + "/mail.js")

app.post("/contact", function(req, res) {

	const email = req.body.email;

	const form = {
		fullName: req.body.name,
		phone: req.body.phone,
		email: email,
		message: req.body.message,
		emailTo: process.env.emailTo,
		emailTitle: `www.armlines.com, ${email}`
	}

	mail.sendMail(form.fullName, form.phone, form.email, form.message, form.emailTo, form.emailTitle, function(err, data) {
		if(err) {
			console.log("Internal error");
			console.log(err);
			res.render(__dirname + "/views/pages/failure.ejs");
		} else {
			console.log("Email sent!");
			res.render(__dirname + "/views/pages/success.ejs");
		}
	});
});

app.get("/collection", function(req, res) {
	productPhotoList = extractData.getProductPhotoList();
	productDataList = extractData.getProductDataList();

	res.render(__dirname + "/views/pages/collection.ejs", {productPhotoList: productPhotoList, productDataList: productDataList, webPage: "collection"});
});

app.post("/success", function(req, res) {
	res.redirect("/");
});

app.post("/failure", function(req, res) {
	res.redirect("/");
});
