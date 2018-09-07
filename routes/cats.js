const express = require('express');
const Queue = require('../utils/queue');

//schema models
const Cat = require('../models/cat');

const router = express.Router();


router.get('/', (req, res, next)=>{
  Cat.findOne()
    .then(results =>{
      const firstCat = results.cats[0];
      console.log(firstCat);
      res.json(firstCat);
    })
    .catch(err =>{
      next(err);
    });
});

router.delete('/', (req,res,next)=>{
  let adoptedCat;
  let newCatArray;

  Cat.findOne()
    .then(results =>{
      if(results.cats.length === 0){
        const err = new Error('We ran out of cats');
        err.status = 400;
        next(err);
      }
      adoptedCat = results.cats.shift();
      newCatArray = results.cats;
      
      return Cat.findOneAndUpdate({}, {cats: newCatArray}, {});
    })
    .then(results =>{
      res.json(adoptedCat);
    })
    .catch(err =>{
      next(err);
    });
});

module.exports = router;