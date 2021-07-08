const router = require("express").Router();
const isLoggedIn = require('../middleware/isLoggedIn');

const User = require("../models/user-model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/all-sports", (req, res) => res.render("sports/sports"))

router.get("/swim", isLoggedIn, (req, res) => {
  User.find({sport: 'Swimming'})
  .then(swimProf => res.render("sports/swimming", {swimProf}))
  .catch(err => console.log(err))
})

router.get("/run", isLoggedIn, (req, res) => {
  User.find({sport: 'Running'})
  .then(runProf => res.render("sports/running", {runProf}))
})

router.get("/crossfit", isLoggedIn, (req, res) => {
  User.find({sport: 'Crossfit'})
  .then(crossProf => res.render("sports/crossfit", {crossProf}))
  })

module.exports = router;
