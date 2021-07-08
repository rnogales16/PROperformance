const plansRouter = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/user-model");
const Plan = require("../models/plans-model");
const fileUploader = require('../config/cloudinary');


const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


// render form/ upload page for new plan
plansRouter.get('/new-plan', (req, res) => {
	res.render('professionals/new-plan', {user: req.session.currentUser});
});



// post new plan
plansRouter.post('/new-plan', fileUploader.single('imageUrl'), (req , res) => {
  const owner = req.session.currentUser._id
  const {title, description} = req.body
  const imageUrl = req.file.path

  Plan.create({owner, title, description, imageUrl})
  .then((newPlan => {
    console.log('this is the new plan', newPlan)

    User.findByIdAndUpdate(owner, {
			$addToSet: {plans: newPlan._id}
		})
    .then(user => console.log('this is the updated professionaL', user))
    
    res.redirect('/site/profile/professional')
  }))
  .catch(err => console.log(err))
})



plansRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  Plan.findById(id)
  .then(planById => res.render('/professionals/professional-profile', {planById, user: req.session.currentUser}))
  .catch(err => console.log(err))
})

plansRouter.post('/delete-plan/:id', (req, res) => {
  const id = req.params.id;
  Plan.findByIdAndDelete(id)
  .then(deletePlan => res.redirect('/site/profile/professional'))
  .catch(err => console.log(err))
})




plansRouter.get('/edit-plan/:id', (req, res) => {
  const id = req.params.id;
  Plan.findById(id)
  .then(plan => res.render('professionals/edit-plan', {plan, user: req.session.currentUser}))
  .catch(err => console.log(err))
})

plansRouter.post('/edit-plan/:id', fileUploader.single('imageUrl'), (req, res) => {
  const id = req.params.id;
  const {title, description, existingPDF} = req.body;

  let imageUrl;
  if (req.file) {
    imageUrl = req.file.path;
  } else {
    imageUrl = existingPDF;
  }

  Plan.findByIdAndUpdate(id, {title, description, imageUrl})
  .then(editPlan => res.redirect('/site/profile/professional'))
  .catch(err => console.log(err))
})


module.exports = plansRouter;