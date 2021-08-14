var mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const {Schema} =mongoose;

const EntityModel= new Schema({
name : {
    type:String,
    trim: true,
    required:[true,"Name is Requried"],
    unique: true,
    index: true,
    maxlength: 100,
    uniqueCaseInsensitive: true
},
owner:{
    type:String, 
    trim: true,
    required:[true,"Owner is Required"],
    unique: true,
    index: true,
    maxlength: 100,
    uniqueCaseInsensitive: true
},
visible_location:{
    type:String, 
    trim: true,
    required:[true,"visible location is Required"],
    unique: true,
    index: true,
    maxlength: 100,
    uniqueCaseInsensitive: true
},
contact_info:{
    type:String, 
    trim: true,
    required:[true,"Contact info is Required"],
    unique: true,
    index: true,
    maxlength: 100,
    uniqueCaseInsensitive: true,

},
location:[{
    latitude:{type:String},
    longitude:{type:String}
}],
})

EntityModel.plugin(uniqueValidator, {
    message: 'Error, expected {PATH} to be unique.'
  });

module.exports = mongoose.model('Entity',EntityModel);