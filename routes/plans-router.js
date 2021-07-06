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


/* 
plansRouter.get('', (req, res) => {
  const id = req.params.id;
  Plan.findById(id)
})
 */



module.exports = plansRouter;

/* 


//route to show one movie
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Movie.findById(id)
  .populate('cast')
  .then((movieDetails) => res.render('./movies/movie-details', movieDetails))
  .catch(err => console.log(err))
})

//route to delete one movie
router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Movie.findByIdAndRemove(id)
  .then(goBackMovies => res.redirect('/movies'))
  .catch(err => console.log(err))
})

//route to show form to edit the movie
router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  Movie.findById(id)
  .populate('cast')
  .then((movie) => {
    console.log(movie)
    res.render('./movies/edit-movie', {movie})
  })
  .catch((err) => console.log(err))
})

//route to handle form data to edit the movie
router.post('/:id/edit', (req, res) => {
  const {id} = req.params;
  const {title, genre, plot, cast} = req.body;
  Movie.findByIdAndUpdate(id, {title, genre, plot, cast})
  .then((updateMovie) => {
    console.log(updateMovie)
    res.redirect('/movies')
  })
  .catch((err) => console.log(err))
}) 


*/