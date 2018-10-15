const Joi = require('joi');
const mongoose = require('mongoose');

const trans = mongoose.model('transportations', new mongoose.Schema(
  {
    name: {
      type: String,
      //   required:true,
    },

    firstname: {
      type: String,

    },
    lastname: {
      type: String,
    },
    phoneno: {
      type: String,

      minlength: 10
    },
    email: {
      type: String,

    },



    address1: {
      type: String,
      maxlength: 50,

    },
    address2: {
      type: String,
      maxlength: 50,
    },
    city: { type: String, },
    state: { type: String, },
    pincode: { type: String, },
    country: { type: String, },

    Avialable: String,
    //Airport pick /drop service provided

    Airport: { type: Boolean, default: false },
    //Cost
    //Small Paws
    small1: String, 
    small2: String,
    small3: String,
    //Medium Paws
    Medium1: String,
    Medium2: String,
    Medium3: String,
    //Large Paws
    Large1: String,
    Large2: String,
    Large3: String,

    //Cost per/km

    Costperkm: String,
    //Minimum charges
    Mincharge: String,
    Conditions: String,


    //bank
    bankname: {
      tye: String,
    },
    accname: String,
    branch: String,
    accno: {
      type: String,
    },
    ifsc: {
      type: String,
    },
    mmid: String,
    gst: String,
    accotype: String,
    writehere:String,
    image:String
  }));


function validateKennel(trans) {
  const schema = {
    // image:Joi.string(),
    //personal details
    name: Joi.string().min(3).required(),
    firstname: Joi.string(),
    lastname: Joi.string(),
    phoneno: Joi.string(),
    email: Joi.string().email(),
    // //  address:Joi.required(),
    address1: Joi.string(),
    address2: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),

    country: Joi.string(),
    pincode: Joi.string(),

    
    Avialable: Joi.string(),
    //Airport pick /drop service provided

    Airport: Joi.string(),
    //Cost
    //Small Paws
    small1: Joi.string(),
    small2: Joi.string(),
    small3: Joi.string(),
    //Medium Paws
    Medium1: Joi.string(),
    Medium2: Joi.string(),
    Medium3: Joi.string(),
    //Large Paws
    Large1: Joi.string(),
    Large2: Joi.string(),
    Large3: Joi.string(),

    //Cost per/km

    Costperkm: Joi.string(),
    //Minimum charges
    Mincharge: Joi.string(),
    Conditions: Joi.string(),


    //bank
    bankname: Joi.string(),
    accname: Joi.string(),
    branch: Joi.string(),
    accno: Joi.string(),
    ifsc: Joi.string(),
    mmid: Joi.string(),
    gst: Joi.string(),
    accotype: Joi.string(),
    writehere:Joi.string(),
    image:Joi.string()
  };
  return Joi.validate(trans, schema);
}


module.exports.trans = trans;
module.exports.validate = validateKennel;