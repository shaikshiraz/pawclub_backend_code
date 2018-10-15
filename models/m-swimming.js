const Joi=require('joi');
const mongoose=require('mongoose');

const swimming=mongoose.model('swimmings',new mongoose.Schema(
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

                              operationaldays:String,
                              //Per Meal Cost

                             
        
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

                                 operationalDays:{type:String},
                                 //per meal cost
                                 small:String,
                                 Medium :String,
                                 Large:String,

                                 available:String,
                                 //time
                                 From:String,
                                 To:String,
                                 //Instance conformation
                                 conformation :{type: Boolean, default: false}, 
                                 Day:String,
                                 Price:String,


                                // Provide Transportaion To and From the pool
                                Transportaion  :{type: Boolean, default: false}, 
                                
                                chargePerkm:String,
                                minCharge:String,
                                PickUp:String,
                                Drop:String,
                               // Terms and Conditions*
                               Conditions:String,
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
                                   writehere:String,
                                   image:String,
   }));


   function validateswinning(swimming){
    const schema={
         image:Joi.string(),
        //personal details
        name:Joi.string().min(3).required(),
      firstname:Joi.string(),
      lastname:Joi.string(),
       phoneno:Joi.string(),
       email:Joi.string().email(),
       //  address:Joi.required(),
       address1:Joi.string(),
      address2:Joi.string(),
      city:Joi.string(),
      state:Joi.string(),

      country:Joi.string(),
      pincode:Joi.string(),

      
      operationalDays:Joi.string(),
      //per meal cost
      small:Joi.string(),
      Medium :Joi.string(),
      Large:Joi.string(),

      available:Joi.string(),
      //time
      From:Joi.string(),
      To:Joi.string(),
      //Instance conformation
      conformation :Joi.boolean(),
      Day:Joi.string(),
      Price:Joi.string(),


     // Provide Transportaion To and From the pool
     Transportaion:Joi.boolean(), 
     
     chargePerkm:Joi.string(),
     minCharge:Joi.string(),
     PickUp:Joi.string(),
     Drop:Joi.string(),

        //bank
        bankname:Joi.string(),
        accname:Joi.string(),
        branch:Joi.string(),
        accno:Joi.string(),
        ifsc:Joi.string(),
        mmid:Joi.string(),
        gst:Joi.string(),
        accotype:Joi.string(),
        writehere:Joi.string(),
       };
       return Joi.validate(swimming,schema);
   }


   module.exports.swimming=swimming;
   module.exports.validate=validateswinning;