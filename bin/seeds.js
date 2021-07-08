// bin/seeds.js

const mongoose = require('mongoose');
const User = require("../models/user-model");


// require database configuration
require('../db/index.js');

// Trainers
const users = [
  {
    name: 'Raul',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'raul@properformance.com',
    role: 'Professional',
    sport: 'Crossfit',
    profession: 'Trainer',
    registrationNumber: 1234,
    imageUrl: '/images/trainCross.png'
  },
  {
    name: 'Lau',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'lau@properformance.com',
    role: 'Professional',
    sport: 'Crossfit',
    profession: 'Trainer',
    registrationNumber: 1234,
    imageUrl: '/images/trainCross2.png'
  },
 
  {
    name: 'Lee',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'lee@properformance.com',
    role: 'Professional',
    sport: 'Running',
    profession: 'Trainer',
    registrationNumber: 1234,
    imageUrl: '/images/trainRun.png'
  },

  {
    name: 'Sebas',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'sebas@properformance.com',
    role: 'Professional',
    sport: 'Running',
    profession: 'Trainer',
    registrationNumber: 1234,
    imageUrl: '/images/trainRun2.png'
  },

  {
    name: 'Morgane',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'morgane@properformance.com',
    role: 'Professional',
    sport: 'Swimming',
    profession: 'Trainer',
    registrationNumber: 1234,
    imageUrl: '/images/trainSwim.png'
  },

  {
    name: 'Victor',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'victor@properformance.com',
    role: 'Professional',
    sport: 'Swimming',
    profession: 'Trainer',
    registrationNumber: 1234,
    imageUrl: '/images/trainSwim2.png'
  },

// Dietitians
  
  {
    name: 'Miki',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'miki@properformance.com',
    role: 'Professional',
    sport: 'Swimming',
    profession: 'Dietitian',
    registrationNumber: 2345,
    imageUrl: '/images/dietSwim.png'
  },

  {
    name: 'Fede',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'fede@properformance.com',
    role: 'Professional',
    sport: 'Swimming',
    profession: 'Dietitian',
    registrationNumber: 2345,
    imageUrl: '/images/dietSwim2.png'
  },

  {
    name: 'Amy',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'amy@properformance.com',
    role: 'Professional',
    sport: 'Running',
    profession: 'Dietitian',
    registrationNumber: 2345,
    imageUrl: '/images/dietRun2.png'
  },

  {
    name: 'Maria',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'maria@properformance.com',
    role: 'Professional',
    sport: 'Running',
    profession: 'Dietitian',
    registrationNumber: 2345,
    imageUrl: '/images/dietRun.png'
  },

  {
    name: 'Fran',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'fran@properformance.com',
    role: 'Professional',
    sport: 'Crossfit',
    profession: 'Dietitian',
    registrationNumber: 2345,
    imageUrl: '/images/dietCross.png'
  },

  {
    name: 'Marco',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'marco@properformance.com',
    role: 'Professional',
    sport: 'Crossfit',
    profession: 'Dietitian',
    registrationNumber: 2345,
    imageUrl: '/images/dietCross2.png'
  },

  {
    name: 'Mia',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'mia@gmail.com',
    role: 'Athlete',
    imageUrl: '/images/userImage.png'
  },

];

User.deleteMany()
.then(
User.insertMany(users)
.then(allUsers => {
  console.log('created number of users: ', allUsers.length)
  mongoose.connection.close();
})
)
.catch(err => console.log(`An error occurred while getting users from the DB: ${err}`))