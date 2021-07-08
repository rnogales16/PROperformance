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
    imageUrl: '../public/images/trainCross.jpeg'
  },
  {
    name: 'Lau',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'lau@properformance.com',
    role: 'Professional',
    sport: 'Crossfit',
    profession: 'Trainer',
    registrationNumber: 1234,
    imageUrl: '../public/images/trainCross2.jpeg'
  },

  {
    name: 'Lee',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'lee@properformance.com',
    role: 'Professional',
    sport: 'Running',
    profession: 'Trainer',
    registrationNumber: 1234,
    imageUrl: '../public/images/trainRun.jpeg'
  },

  {
    name: 'Sebas',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'sebas@properformance.com',
    role: 'Professional',
    sport: 'Running',
    profession: 'Trainer',
    registrationNumber: 1234,
    imageUrl: '../public/images/trainRun.jpeg'
  },

  {
    name: 'Morgane',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'morgane@properformance.com',
    role: 'Professional',
    sport: 'Swimming',
    profession: 'Trainer',
    registrationNumber: 1234,
    imageUrl: '../public/images/trainSwim.jpeg'
  },

  {
    name: 'Victor',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'victor@properformance.com',
    role: 'Professional',
    sport: 'Swimming',
    profession: 'Trainer',
    registrationNumber: 1234,
    imageUrl: '../public/images/trainSwim2.jpeg'
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
    imageUrl: '../public/images/dietSwim.jpeg'
  },

  {
    name: 'Fede',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'fede@properformance.com',
    role: 'Professional',
    sport: 'Swimming',
    profession: 'Dietitian',
    registrationNumber: 2345,
    imageUrl: '../public/images/dietSwim2.jpeg'
  },

  {
    name: 'Amy',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'amy@properformance.com',
    role: 'Professional',
    sport: 'Running',
    profession: 'Dietitian',
    registrationNumber: 2345,
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AImage_created_with_a_mobile_phone.png&psig=AOvVaw1TJuIZRy9vK2hDf5vJDU0j&ust=1625569458812000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjE-aLky_ECFQAAAAAdAAAAABAD'
  },

  {
    name: 'Marco',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'marco@properformance.com',
    role: 'Professional',
    sport: 'Running',
    profession: 'Dietitian',
    registrationNumber: 2345,
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AImage_created_with_a_mobile_phone.png&psig=AOvVaw1TJuIZRy9vK2hDf5vJDU0j&ust=1625569458812000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjE-aLky_ECFQAAAAAdAAAAABAD'
  },

  {
    name: 'Fran',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'fran@properformance.com',
    role: 'Professional',
    sport: 'Crosstrain',
    profession: 'Dietitian',
    registrationNumber: 2345,
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AImage_created_with_a_mobile_phone.png&psig=AOvVaw1TJuIZRy9vK2hDf5vJDU0j&ust=1625569458812000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjE-aLky_ECFQAAAAAdAAAAABAD'
  },

  {
    name: 'Maria',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'maria@properformance.com',
    role: 'Professional',
    sport: 'Crosstrain',
    profession: 'Dietitian',
    registrationNumber: 2345,
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AImage_created_with_a_mobile_phone.png&psig=AOvVaw1TJuIZRy9vK2hDf5vJDU0j&ust=1625569458812000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjE-aLky_ECFQAAAAAdAAAAABAD'
  },

  {
    name: 'Marco',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'marco@marco.com',
    role: 'Athlete',
  },
  {
    name: 'Fede',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'fede@fede.com',
    role: 'Athlete',
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