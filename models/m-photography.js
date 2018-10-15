const Joi=require('joi');
const mongoose=require('mongoose');

const photo=mongoose.model('photography',new mongoose.Schema(
    {        
        name:{
            type:String,
            //   required:true,
               },
        
                firstname:{
                    type:String,
                   
                     },
                     lastname:{
                        type:String,
                         },
                         phoneno:{
                            type:String,
                           
                            minlength:10
                                },
                       email:{
                            type:String,
                           
                              },
                         
                             
        
                                address1:{type:String,
                                           maxlength:50,
                                          
                                          },
                                 address2:{type:String,
                                           maxlength:50,
                                          },
                                 city:{type:String,},
                                 state:{type:String,},
                                 pincode:{type:String,},
                                 country:{type:String,},

                                 Website:{type:String},
                                 Available :String,
                                 //Cost
                                 noofShots:String,
                                 PerHour:String,
                                 HalfDay:String,
                                 Fullday:String,

                                 //Comments / description
                                 Comments:String,
                                // Terms and Conditions
                                Condition:String,

                                 //bank
                                 bankname:{tye:String,
                                 },
                                   accname:String,
                                   branch:String,
                                   accno:{type:String,
                                    },
                                   ifsc:{type:String,
                                     },
                                   mmid:String,
                                   gst:String,
                                   accotype:String,
                                   image:String,
                                   writehere:String,
   }));


   function validatePhoto(photo){
    const schema={
      image:Joi.string(),
        //personal details
        name:Joi.string().min(3).required(),
      firstname:Joi.string(),
      lastname:Joi.string(),
       phoneno:Joi.string(),
       email:Joi.string().email(),
      // //  address:Joi.required(),
       address1:Joi.string(),
      address2:Joi.string(),
      city:Joi.string(),
      state:Joi.string(),
      country:Joi.string(),
      pincode:Joi.string(),
      
      Website:Joi.string(),
      Available :Joi.string(),
      //Cost
      noofShots:Joi.string(),
      PerHour:Joi.string(),
      HalfDay:Joi.string(),
      Fullday:Joi.string(),

      //Comments / description
      Comments:Joi.string(),
     // Terms and Conditions
     Condition:Joi.string(),
        //bank
        bankname:Joi.string(),
        accname:Joi.string(),
        branch:Joi.string(),
        accno:Joi.string(),
        ifsc:Joi.string(),
        mmid:Joi.string(),
        gst:Joi.string(),
        accotype:Joi.string(),
        writehere:Joi.string()
       };
       return Joi.validate(photo,schema);
   }


   module.exports.photo=photo;
   module.exports.validate=validatePhoto;