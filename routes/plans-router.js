const plansRouter = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/user-model");
const Plan = require("../models/plans-model");


const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


// render form/ upload page for new plan
plansRouter.get('/new-plan', (req, res) => {
	res.render('professionals/new-plan');
});



// post new plan
plansRouter.post('/new-plan', (req , res) => {
  const owner = req.session.currentUser._id
  const {title, description} = req.body
  console.log('this is a log of the body', {title, description})

  Plan.create({owner, title, description})
  .then((newPlan => {
    console.log('this is a log of the data', newPlan)
    res.redirect('/site/profile/professional')
}))
})






plansRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  Plan.findById(id)
  .then(planById => res.render('/professionals/professional-profile', planById))
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
  .then(plan => res.render('professionals/edit-plan', plan))
  .catch(err => console.log(err))
})

plansRouter.post('/edit-plan/:id', (req, res) => {
  const id = req.params.id;
  const {title, description, imageUrl} = req.body;
  Plan.findByIdAndUpdate(id, {title, description, imageUrl})
  .then(editPlan => res.redirect('/site/profile/professional'))
})


module.exports = plansRouter;