const express = require('express');
const Queue = require('../utils/queue');

const seedCats = require('../db/seed/cats');
const seedDogs = require('../db/seed/dogs');

const Cat = require('../models/cat');
const Dog = require('../models/dog');

const router = express.Router();


router.use('/', (req, res, next)=>{

  const catsArr = seedCats[0].cats;
  const dogsArr = seedDogs[0].dogs;
  console.log(catsArr);
  console.log(dogsArr);

  Cat.findOneAndUpdate({}, {cats: catsArr}, {})
    .then(results=>{
      return res.json();
    })
    .catch(err =>{
      next(err);
    });

  Dog.findOneAndUpdate({}, {dogs: dogsArr}, {})
    .then(results=>{
      return res.json();
    })
    .catch(err =>{
      next(err);
    });

  

  // Cat.findOneAndUpdate( {}, updateObj, options)
  //   .then(results =>{
  //     console.log('heyo', results);
  //     res.json(results);
  //   })
  //   .catch(err =>{
  //     next(err);
  //   });
});


module.exports = router;
