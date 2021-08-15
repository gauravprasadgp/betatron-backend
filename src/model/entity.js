var mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');
const {Schema} =mongoose;

const EntityModel= new Schema({
name:{
    type:String,
    trim: true,
    required:[true,"Name is Requried"],
    maxlength: 100,
    uniqueCaseInsensitive: true
},
owner:{
    type:String, 
    trim: true,
    required:[true,"Owner is Required"],
    maxlength: 100,
    uniqueCaseInsensitive: true
},
visible_location:{
    type:String, 
    trim: true,
    required:[true,"visible location is Required"],
    maxlength: 500,
    uniqueCaseInsensitive: true
},
contact_info:{
    type:String, 
    trim: true,
    required:[true,"Contact info is Required"],
    maxlength: 100,
    uniqueCaseInsensitive: true,
},
tags:{
    type:[String],
    required: true
 },
category:{
    type:String,
    trim:true,
    required:[true,"Category is Required"],
    maxlength: 100,
    uniqueCaseInsensitive:true
},
location:{
    latitude:{type:String},
    longitude:{type:String}
},
})

EntityModel.plugin(uniqueValidator, {
    message: 'Error, expected {PATH} to be unique.'
  });
EntityModel.plugin(mongoose_fuzzy_searching, { fields: ['name','category','owner','visible_location','contact_info'] });

module.exports = mongoose.model('Entity',EntityModel);