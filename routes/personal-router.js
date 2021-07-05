const personalRouter = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/user-model");



const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


// routes go here:

personalRouter.get("/profile/user", isLoggedIn, (req, res) => {
    res.render("users/user-profile");
});


personalRouter.get("/profile/professional", isLoggedIn, (req, res) => {
  res.render("professionals/professional-profile");
});


module.exports = personalRouter;