const express = require('express');

//schema models
//TODO

const router = express.Router();

//Dummy Data
const tempCats = [
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL:'https://i.imgur.com/fKOW55j.jpg', 
    imageDescription: 'Black chimera cat with two-toned face split down the center',
    name: 'Jessie-Stan',
    sex: 'Male',
    age: 5,
    breed: 'Chimera',
    story: 'Simultaneously possessed by angel and devil'
  },
  {
    imageURL:'https://i.imgur.com/vGMotJv.jpg', 
    imageDescription: 'Wrinkly sphynx cat with dark splotches',
    name: 'Akhenaten',
    sex: 'Male',
    age: 3353,
    breed: 'Sphynx',
    story: 'Egyptian Pharaoh reincarnated into cat body'
  }
];

router.get('/', (req, res, next)=>{
  res.json(tempCats[0]);
});

router.delete('/', (req,res,next)=>{
  if(tempCats.length > 0){
    const yourCat = tempCats.shift();
    res.json(yourCat);
  }else{
    const err = new Error('We ran out of cats');
    err.status = 400;
    return next(err);
  }
});

module.exports = router;