// const Joi=require('joi');
const mongoose=require('mongoose');

const home_stay_cart=mongoose.model('home-stay-cart',new mongoose.Schema(
    {   
        name:{
            type:String,
            //   required:true,
               }, 
      
   }));


//    function validateAdoption(adoption){
//     const schema={
       
//        };
//        return Joi.validate(adoption,schema);
//    }


   module.exports.home_stay_cart=home_stay_cart;
//    module.exports.validate=validateAdoption;