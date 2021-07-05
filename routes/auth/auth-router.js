const authRouter = require("express").Router();
// :fuente_de_información: Handles password encryption
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const saltRounds = process.env.SALT || 10; 
//const zxcvbn = require("zxcvbn");


// Require the User model in order to interact with the database
const User = require("../../models/user-model");
const Professional = require("../../models/professional-model");


// Require necessary (isLoggedOut and isLiggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../../middleware/isLoggedOut");
const isLoggedIn = require("../../middleware/isLoggedIn");


// Routes go here
//************ Sign up user***************/

authRouter.get("/user-signup", isLoggedOut, (req, res) => {
  res.render("auth/user-signup");
});


// POST    '/auth/signup'
authRouter.post('/user-signup', (req, res, next) => {
  const { name, password, email } = req.body;
  if (name === "" || password === "" || email === "" || password.length < 3)  {
  res.render('auth/user-signup', {
    errorMessage: 'Name, email and Password are required.',
  });
  return;
}

//Check if the username is not taken
User.findOne({ username })
.then((userObj) => {
  if (userObj) {
    // if user was found
    res.render('auth/user-signup', {
      errorMessage: `Username ${username} is already taken.`,
    });
    return;
  } else {
    // Allow the user to signup if above conditions are ok

    // Generate salts and encrypt the password (known as Hash the password)
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create new user in DB, saving the encrypted password
    User.create({ name, email, password: hashedPassword })
      .then((user) => res.redirect("/login"))
      .catch((err) => {
        if (err instanceof mongoose.Error.ValidationError) { 
        res.render('auth/user-signup', {
          errorMessage: err.message, 
        });
        } else {
          next(err) // this is transforming it into a middleware, it passes onto the next router to catch the error(see err - refers to app.js)
        }
      });
  }
})
.catch((err) => next(err));

// X.  Catch errors coming from calling to User collection
});

//************ Sign up professional***************/

authRouter.get("/professional-signup", isLoggedOut, (req, res) => {
  res.render("auth/professional-signup", {sports: ['Crossfit', 'Swimming', 'Running']});
});



authRouter.post('/professional-signup', (req, res, next) => {
  const { name, password, email, sport, registrationNumber, resources, imgUrl } = req.body;
  if (name === "" || password === "" || email === "" || sport === "" || registrationNumber === "" || resources === "" || imageUrl === "" || password.length < 3)  {
  res.render('auth/professional-signup', {
    errorMessage: 'All fields are required.',
  });
  return;
}

//Check if the username is not taken
Professional.findOne({ username })
.then((userObj) => {
  if (userObj) {
    // if user was found
    res.render('auth//professional-signup', {
      errorMessage: `Username ${username} is already taken.`,
    });
    return;
  } else {
    // Allow the user to signup if above conditions are ok

    // Generate salts and encrypt the password (known as Hash the password)
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create new user in DB, saving the encrypted password
    Professional.create({ name, email, password: hashedPassword, sport, registrationNumber, resources, imageUrl })
      .then((user) => res.redirect("/login"))
      .catch((err) => {
        if (err instanceof mongoose.Error.ValidationError) { 
        res.render('auth/professional-signup', {
          errorMessage: err.message, 
        });
        } else {
          next(err) // this is transforming it into a middleware, it passes onto the next router to catch the error(see err - refers to app.js)
        }
      });
  }
})
.catch((err) => next(err));

// X.  Catch errors coming from calling to User collection
});



// *********** login user**************

authRouter.get("/login", isLoggedOut, (req, res) => {
  res.render("auth/login");
});

authRouter.post("/login", isLoggedOut, (req, res, next) => {
  const { username, password } = req.body;

  
  if (username === "" || password === "" || password.length < 3) { 
    res.render("auth/login", { errorMessage: "Username and Password are required. Password must be more than 3 characters" }); 
    return; // stops the execution of the function further
    }
  // Search the database for a user with the username submitted in the form
  User.findOne({username})
  .then(user => {
    // if user not found, show error message below
    if (!user) {
      res.render("auth/login", { errorMessage: "Input invalid!"});
    } else {
      // If user exists ->  Check if the password is correct
      const encryptedPassword = user.password;
      // to encrypt the password and compare it use:
      const passwordCorrect = bcrypt.compareSync(password, encryptedPassword);
  
      if(passwordCorrect){
        req.session.currentUser = user;
        res.redirect('/site/home')
      } else {
        res.render("auth/login", { errorMessage: "Name or password incorrect" });
      }
      }
  })
})

// *********** login professional**************

authRouter.get("/login", isLoggedOut, (req, res) => {
  res.render("auth/login");
});

authRouter.post("/login", isLoggedOut, (req, res, next) => {
  const { username, password } = req.body;

  
  if (username === "" || password === "" || password.length < 3) { 
    res.render("auth/login", { errorMessage: "Username and Password are required. Password must be more than 3 characters" }); 
    return; // stops the execution of the function further
    }
  // Search the database for a user with the username submitted in the form
  Professional.findOne({username})
  .then(professional => {
    // if user not found, show error message below
    if (!professional) {
      res.render("auth/login", { errorMessage: "Input invalid!" });
    } else {
      // If user exists ->  Check if the password is correct
      const encryptedPassword = user.password;
      // to encrypt the password and compare it use:
      const passwordCorrect = bcrypt.compareSync(password, encryptedPassword);
  
      if(passwordCorrect){
        req.session.currentUser = professional;
        res.redirect('/site/home')
      } else {
        res.render("auth/login", { errorMessage: "Name or password incorrect" });
      }
      }
  })
})


// to log- out we can delete the cookie or delete the session
authRouter.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if(err){
      res.render("error", { message: "Something went wrong!" });
    }else{
      res.redirect('/')
    }
  }) 
})

module.exports = authRouter;