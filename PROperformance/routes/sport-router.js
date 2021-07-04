
const sportRouter = require("express").Router();


const Sport = require('../../models/sport-model');


const isLoggedOut = require("../../middleware/isLoggedOut");
const isLoggedIn = require("../../middleware/isLoggedIn");


sportRouter.get('/', (req, res, next) => {
    Sport.find()
    .then(allSports => res.render('sports/sports', {allSports}))
    .catch (err => console.log(err))
  })


  