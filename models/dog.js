const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  dogs: [
    {
      imageURL: {type: String},
      imageDescription: {type: String},
      name: {type: String},
      sex: {type: String},
      age: {type: Number},
      breed: {type: String},
      story: {type: String},
    }
  ]
});

dogSchema.set('toObject',{
  virtuals: true,
  versionKey: false,
  transform: (document, ret) =>{
    delete ret._id;
  }
});

module.exports = mongoose.model('Dog', dogSchema);