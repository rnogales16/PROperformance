const personalRouter = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/user-model");
const Plan = require("../models/plans-model");
const Review = require("../models/review-model");



const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


// routes go here:

personalRouter.get("/profile/user", (req, res) => {
    res.render("users/user-profile", {user: req.session.currentUser});
});


personalRouter.get("/profile/professional", (req, res) => {
	Plan.find({owner: req.session.currentUser._id})
	.populate("reviews")
	.then(planData => res.render("professionals/professional-profile", {user: req.session.currentUser, planData})	
	)
	.catch(err => console.log(err))
});





module.exports = personalRouter;



/* 
install multer: is a middleware, only works when de user is loged in
var multer = require ('multer')
app.post('/profile', upload.single)

*/