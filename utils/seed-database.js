const mongoose = require('mongoose');

const {DATABASE_URL} = require('../config');

const Cat = require('../models/Cat');
const Dog = require('../models/Dog');


const seedCats = require('../db/seed/cats');
const seedDogs = require('../db/seed/dogs');

mongoose.connect(DATABASE_URL)
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() =>{
    return Promise.all([
      Cat.insertMany(seedCats),
      Dog.insertMany(seedDogs)
    ]);
  })
  .then(results =>{
    console.info('Init db with Cats, Dogs');
  })
  .then(() => mongoose.disconnect())
  .catch(err =>{
    console.error(err);
  });