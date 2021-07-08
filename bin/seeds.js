// bin/seeds.js

const mongoose = require('mongoose');
const User = require("../models/user-model");


// require database configuration
require('../db/index.js');

const users = [
  {
    name: 'Raul',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'raul@raul.com',
    role: 'Professional',
    sport: 'Crossfit',
    profession: 'Trainer',
    registrationNumber: 1234,
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AImage_created_with_a_mobile_phone.png&psig=AOvVaw1TJuIZRy9vK2hDf5vJDU0j&ust=1625569458812000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjE-aLky_ECFQAAAAAdAAAAABAD'
  },
  {
    name: 'Amy',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'raul@raul.com',
    role: 'Professional',
    sport: 'Crossfit',
    profession: 'Trainer',
    registrationNumber: 1234,
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AImage_created_with_a_mobile_phone.png&psig=AOvVaw1TJuIZRy9vK2hDf5vJDU0j&ust=1625569458812000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjE-aLky_ECFQAAAAAdAAAAABAD'
  },

  {
    name: 'Lee',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'raul@raul.com',
    role: 'Professional',
    sport: 'Swimming',
    profession: 'Trainer',
    registrationNumber: 1234,
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AImage_created_with_a_mobile_phone.png&psig=AOvVaw1TJuIZRy9vK2hDf5vJDU0j&ust=1625569458812000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjE-aLky_ECFQAAAAAdAAAAABAD'
  },

  {
    name: 'Lee',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'raul@raul.com',
    role: 'Professional',
    sport: 'Swimming',
    profession: 'Trainer',
    registrationNumber: 1234,
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AImage_created_with_a_mobile_phone.png&psig=AOvVaw1TJuIZRy9vK2hDf5vJDU0j&ust=1625569458812000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjE-aLky_ECFQAAAAAdAAAAABAD'
  },
  
  {
    name: 'Miki',
    password: '$2a$10$qQxOtdmNPsgXcv1YFvbJ5uRzogrwIvguoEbkgfp4jWfgCbEOraQxK',
    email: 'miki@miki.com',
    role: 'Professional',
    sport: 'Running',
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