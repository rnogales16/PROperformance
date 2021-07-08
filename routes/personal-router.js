const personalRouter = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/user-model");
const Plan = require("../models/plans-model");
const Review = require("../models/review-model");



const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


// routes go here:

//User profile

personalRouter.get("/profile/user", (req, res) => {
    res.render("users/user-profile", {user: req.session.currentUser});
});

// Professional profile
personalRouter.get("/profile/professional", (req, res) => {
	Plan.find({owner: req.session.currentUser._id})
	.populate("reviews")
	.then(planData => res.render("professionals/professional-profile", {user: req.session.currentUser, planData})	
	)
	.catch(err => console.log(err))
});



// all professionals

personalRouter.get('/all-professionals', (req, res) => {
	User.find({role: 'Professional'})
	// need to know how to populate plans here? Possible?
	.then(professionals => res.render('professionals/all-professionals', {professionals}))
	.catch(err => console.log(err))
})


// one professional by id
personalRouter.get('/professional/:id', (req, res) => {
	User.findById(req.params.id)
	.populate({
		path: 'reviews',
		populate: {
			path: 'owner'
		}
	})
	.populate('plans')
	.then(professional =>{
		res.render('professionals/each-professional', professional)
	})
	.catch(err => console.log(err))
})

// reviewing one professional
personalRouter.post('/professional/:id', (req, res) => {
	const professionalId = req.params.id
	const comment = req.body.comment

	Review.create({
		owner: req.session.currentUser._id,
		comment
	})
	.then((newReview) => {
		console.log(newReview)
		User.findByIdAndUpdate(professionalId, {
			$addToSet: {reviews: newReview._id}
		})
			.then(updatedProfessional => res.redirect(`/site/professional/${professionalId}`))
			})
	.catch(err => console.log(err))
	})

module.exports = personalRouter;



/* 
install multer: is a middleware, only works when de user is loged in
var multer = require ('multer')
app.post('/profile', upload.single)

*/