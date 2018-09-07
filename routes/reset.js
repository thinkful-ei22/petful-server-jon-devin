const express = require('express');
const Queue = require('../utils/queue');

const seedCats = require('../db/seed/cats');

const Cat = require('../models/cat');
// const Dog = require('../models/dog');

const router = express.Router();


router.use('/', (req, res, next)=>{

  Cat.findOne()
    .then(results=>{
      console.log(results);
      return res.json();
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
