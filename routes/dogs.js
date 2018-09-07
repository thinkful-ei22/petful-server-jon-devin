const express = require('express');

//schema models
//TODO

const router = express.Router();


const tempDogs = 
[
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner is suuuuuper dead'
  },
  {
    imageURL: 'https://i.imgur.com/NhdyB0R.jpg',
    imageDescription: 'A timber wolf in a fashionable tuxedo',
    name: 'Duke',
    sex: 'Male',
    age: 4,
    breed: 'Timber',
    story: 'Lost his large corporation'
  },
  {
    imageURL: 'https://i.imgur.com/yiZcPas.jpg',
    imageDescription: 'A shiba-inu in a trendy shirt and jacket',
    name: 'Roy',
    sex: 'Male',
    age: 2,
    breed: 'Shiba-Inu',
    story: 'Abandoned for being too trendy'
  },
];

router.get('/', (req, res, next)=>{
  res.json(tempDogs[0]);
});

router.delete('/', (req,res,next)=>{
  if(tempDogs.length > 0){
    const yourDog = tempDogs.shift();
    res.json(yourDog);
  }else{
    const err = new Error('We ran out of dogs');
    err.status = 400;
    return next(err);
  }
});

module.exports = router;