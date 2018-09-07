const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  cats: [
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

catSchema.set('toObject',{
  virtuals: true,
  versionKey: false,
  transform: (document, ret) =>{
    delete ret._id;
  }
});

module.exports = mongoose.model('Cat', catSchema);