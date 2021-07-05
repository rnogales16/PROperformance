const personalRouter = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/user-model");



const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


// routes go here:

personalRouter.get("/profile/user", (req, res) => {
    res.render("users/user-profile", {user: req.session.currentUser});
});


personalRouter.get("/profile/professional", (req, res) => {
  res.render("professionals/professional-profile", {user: req.session.currentUser});
});


personalRouter.get('/new-plan', (req, res) => {
	res.render('professionals/new-plan', {user: req.session.currentUser});
});


personalRouter.post('/new-plan', (req , res) => {
	const id = req.session.currenUser._id
})
/* router.post('/new-plan', (req, res) => {

	//Get the user id from the session
	const userId = req.session.currentUser._id;

	//Get the form data from the body
	const { name, description, imageUrl } = req.body;

	console.log(name, description, imageUrl);

	Room.create({
		name,
		description,
		imageUrl,
		owner: userId
	})
	.then((createdRoom) => {
		console.log(createdRoom)
		res.redirect('/private/rooms/add');

	})
	.catch((error) => {console.log(error)})

}); */







module.exports = personalRouter;



/* 
install multer: is a middleware, only works when de user is loged in
var multer = require ('multer')
app.post('/profile', upload.single)

*/