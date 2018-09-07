const express = require('express');
const Queue = require('../utils/queue');

//schema models
const Cat = require('../models/cat');

const router = express.Router();

//Dummy Data
// const someCats = [
//   {
//     imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
//     imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
//     name: 'Fluffy',
//     sex: 'Female',
//     age: 2,
//     breed: 'Bengal',
//     story: 'Thrown on the street'
//   },
//   {
//     imageURL:'https://i.imgur.com/fKOW55j.jpg', 
//     imageDescription: 'Black chimera cat with two-toned face split down the center',
//     name: 'Jessie-Stan',
//     sex: 'Male',
//     age: 5,
//     breed: 'Chimera',
//     story: 'Simultaneously possessed by angel and devil'
//   },
//   {
//     imageURL:'https://i.imgur.com/vGMotJv.jpg', 
//     imageDescription: 'Wrinkly sphynx cat with dark splotches',
//     name: 'Akhenaten',
//     sex: 'Male',
//     age: 3353,
//     breed: 'Sphynx',
//     story: 'Egyptian Pharaoh reincarnated into cat body'
//   }
// ];

const catsQueue = new Queue();


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