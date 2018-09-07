const mongoose = require('mongoose');

const {DATABASE_URL} = require('../config');

const Cat = require('../models/Cat');
// const Cat = require('../models/Cat');


const seedCats = require('../db/seed/cats');

mongoose.connect(DATABASE_URL)
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() =>{
    return Promise.all([
      Cat.insertMany(seedCats)
      // Dog.insertMany(seedDogs);
    ]);
  })
  .then(results =>{
    console.info('Init db with Cats');
  })
  .then(() => mongoose.disconnect())
  .catch(err =>{
    console.error(err);
  });