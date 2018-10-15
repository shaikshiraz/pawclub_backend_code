const Joi = require('joi');
const mongoose = require('mongoose');

const kennel = mongoose.model('kennels', new mongoose.Schema(
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

        //Operating Hours
        From: String,
        To: String,
        //Friendly with people
        people: String,
        //Friendly with kids
        kids: String,
        //Friendly with other dogs
        otherdogs: String,
        //Friendly with other cats
        cats: String,
        //Do you provide kibbles
        kibbles: { type: Boolean, default: false },
        // What is the : per portion
        cost:String,

        services: { type: Boolean, default: false },
        first_aidkit: { type: Boolean, default: false },
        senior_dog: { type: Boolean, default: false },
        females_on: { type: Boolean, default: false },
        //Daily updates given to pet owners
        updates: { type: Boolean, default: false },
        //Separate rooms for pets
        rooms: { type: Boolean, default: false },
        //Bath available on request on extra charge
        Bath: { type: Boolean, default: false },
        //Swimming pool available
        Swimming: { type: Boolean, default: false },
        //Can Adminster oral medication if necessary
        medication: { type: Boolean, default: false },
        //Instant booking allowed
        booking: { type: Boolean, default: false },
        //Home visit mandatory
        home_visit: { type: Boolean, default: false },
        //Do you take in only house trained pets
        pet_training: { type: Boolean, default: false },
        //Need to be free from ticks
        need_ticks: { type: Boolean, default: false },
        //open play area
        open_play: { type: Boolean, default: false },
        // A/C accomodation Available
        ac_accomodation: { type: Boolean, default: false },
        ac_charges: String,

        //Do You Provide Pick and drop
        PickDrop: { type: Boolean, default: false },
        ChargePerkm: String,
        MinCharge: String,
        PickCharge: String,
        DropCharge: String,



        //  Day Care Services Provided(less Then 24hrs)
        //Timings
        Timings: { type: Boolean, default: false },
        //0to12 hour
        SmallPawCharge: String,
        MediumPawCharge: String,
        largePawCharge: String,

        Food: { type: Boolean, default: false },
        MealCharge: String,
        //Responds to Commands
        PawName: String,
        sit: String,
        come: String,
        walk: String,
        No: String,
        stay: String,

        //   bank:[
        //       {
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
        image: String,
        writehere: String,
        Conditions: String,
    }));


function validateKennel(kennel) {
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

        //Operating Hours
        From: Joi,
        To: Joi,
        //Friendly with people
        people: Joi.string(),
        //Friendly with kids
        kids: Joi.string(),
        //Friendly with other dogs
        otherdogs: Joi.string(),
        //Friendly with other cats
        cats: Joi.string(),
        //Do you provide kibbles
        kibbles: Joi.boolean(),
       // What is the : per portion
          cost:Joi.string(),
        services: Joi.boolean(),
        first_aidkit: Joi.boolean(),
        senior_dog: Joi.boolean(),
        females_on: Joi.boolean(),
        //Daily updates given to pet owners
        updates: Joi.boolean(),
        //Separate rooms for pets
        rooms: Joi.boolean(),
        //Bath available on request on extra charge
        Bath: Joi.boolean(),
        //Swimming pool available
        Swimming: Joi.boolean(),
        //Can Adminster oral medication if necessary
        medication: Joi.boolean(),
        //Instant booking allowed
        booking: Joi.boolean(),
        //Home visit mandatory
        home_visit: Joi.boolean(),
        //Do you take in only house trained pets
        pet_training: Joi.boolean(),
        //Need to be free from ticks
        need_ticks: Joi.boolean(),
        //open play area
        open_play: Joi.boolean(),
        // A/C accomodation Available
        ac_accomodation: Joi.boolean(),
        ac_charges: Joi.string(),

        //Do You Provide Pick and drop
        PickDrop: Joi.boolean(),
        ChargePerkm: Joi.string(),
        MinCharge: Joi.string(),
        PickCharge: Joi.string(),
        DropCharge: Joi.string(),



        //  Day Care Services Provided(less Then 24hrs)
        //Timings
        Timings: Joi.boolean(),
        //0to12 hour
        SmallPawCharge: Joi.string(),
        MediumPawCharge: Joi.string(),
        largePawCharge: Joi.string(),

        Food: Joi.boolean(),
        MealCharge: Joi.string(),
        //Responds to Commands
        PawName: Joi.string(),
        sit: Joi.string(),
        come: Joi.string(),
        walk: Joi.string(),
        No: Joi.string(),
        stay: Joi.string(),

        //bank
        bankname: Joi.string(),
        accname: Joi.string(),
        branch: Joi.string(),
        accno: Joi.string(),
        ifsc: Joi.string(),
        mmid: Joi.string(),
        gst: Joi.string(),
        accotype: Joi.string(),
        image: Joi.string(),
        writehere: Joi.string(),
        Conditions: Joi.string(),
    };
    return Joi.validate(kennel, schema);
}


module.exports.kennel = kennel;
module.exports.validate = validateKennel;