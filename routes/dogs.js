const express = require('express');
const Queue = require('../utils/queue');

//schema models
const Dog = require('../models/dog');

const router = express.Router();

router.get('/', (req, res, next)=>{
  Dog.findOne()
    .then(results =>{
      const firstDog = results.dogs[0];
      res.json(firstDog);
    })
    .catch(err =>{
      next(err);
    });
});

router.delete('/', (req,res,next)=>{
  let adoptedDog;
  let newDogArray;

  Dog.findOne()
    .then(results =>{
      if(results.dogs.length === 0){
        const err = new Error('We ran out of dogs');
        err.status = 400;
        next(err);
      }
      adoptedDog = results.dogs.shift();
      newDogArray = results.dogs;
      
      return Dog.findOneAndUpdate({}, {dogs: newDogArray}, {});
    })
    .then(results =>{
      res.json(adoptedDog);
    })
    .catch(err =>{
      next(err);
    });
});
module.exports = router;