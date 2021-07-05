// bin/seeds.js

const mongoose = require('mongoose');
const User = require("../models/user-model");


// require database configuration
require('../db/index.js');

const users = [
  {
    name: 'Raul',
    password: 'raul',
    email: 'raul@raul.com',
    role: 'Professional',
    sport: 'Crossfit',
    registrationNumber: 1234,
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AImage_created_with_a_mobile_phone.png&psig=AOvVaw1TJuIZRy9vK2hDf5vJDU0j&ust=1625569458812000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjE-aLky_ECFQAAAAAdAAAAABAD'
  },
  {
    name: 'Miki',
    password: 'miki',
    email: 'miki@miki.com',
    role: 'Professional',
    sport: 'Running',
    registrationNumber: 2345,
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AImage_created_with_a_mobile_phone.png&psig=AOvVaw1TJuIZRy9vK2hDf5vJDU0j&ust=1625569458812000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjE-aLky_ECFQAAAAAdAAAAABAD'
  },
  {
    name: 'Marco',
    password: 'marco',
    email: 'marco@marco.com',
    role: 'Athlete',
  },
  {
    name: 'Fede',
    password: 'fede',
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