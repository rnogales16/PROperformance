
const reviewsRouter = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/user-model");
const Review = require("../models/review-model");


const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


/* // render form/ upload page for new plan
reviewsRouter.get('/new-review', (req, res) => {
	res.render('users/new-review');
});


reviewsRouter.post('/new-review', (req , res) => {
    const owner = req.session.currentUser._id
    const comment = req.body.comment

Review.create({owner, comment})
.then((newReview => {
  res.redirect('/') // redirect to the resorces page USER view
}))
})
 */

module.exports = reviewsRouter;