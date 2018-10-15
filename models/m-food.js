const Joi=require('joi');
const mongoose=require('mongoose');

const foo=mongoose.model('food',new mongoose.Schema(
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
                                          },
                                
                                 city:{type:String,},
                                 state:{type:String,},
                                 pincode:{type:String,},
                                 country:{type:String,},


                                 Refrigeration:{type: Boolean, default: false},
                                 order:{type: Boolean, default: false}, 
                                 ServiceArea:String,
                                 DeliverySchedule:String,
                                 DelivaryTimings:String,
                                 CostPerQuantity:String,
   

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
                                  dog:String,
                                  service:String,
                                  //delivery charges
                                  //area
                                  
                              
                                  area:String,
                                  //  area_1:String,
                                  // area_2:String,
                                  //  area_3:String,
                                  // area_4:String,
                                  // area_5:String,
                                  //inr
                                  food_INR:String,
                                  //  food_INR_1:String,
                                  // food_INR_2:String,
                                  // food_INR_3:String,
                                  // food_INR_4:String,
                                  // food_INR_5:String
                                  
   }));


   function validateFood(foo){
    const schema={
      dog:Joi.string(),
      service:Joi.string(),
         image:Joi.string(),
        //personal details
         name:Joi.string(),
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

      Refrigeration:Joi.boolean(),
      order:Joi.boolean(), 
      ServiceArea:Joi.string(),
      DeliverySchedule:Joi.string(),
      DelivaryTimings:Joi.string(),
      CostPerQuantity:Joi,

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

        //delivery charges
        //area
      
         area:Joi.string(),
        //  area_1:Joi.string(),
        //  area_2:Joi.string(),
        //  area_3:Joi.string(),
        //  area_4:Joi.string(),
        //  area_5:Joi.string(),
        // //inr
         food_INR:Joi.string(),
        //  food_INR_1:Joi.string(),
        //  food_INR_2:Joi.string(),
        // food_INR_3:Joi.string(),
        //  food_INR_4:Joi.string(),
        //  food_INR_5:Joi.string()
       };
       return Joi.validate(foo,schema);
   }


   module.exports.foo=foo;
   module.exports.validate=validateFood;