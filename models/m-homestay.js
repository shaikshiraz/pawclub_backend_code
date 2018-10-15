const Joi=require('joi');
const mongoose=require('mongoose');

const home=mongoose.model('homestay',new mongoose.Schema(
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
                            
           
                         drop:String,
                         pick:String,
                         maxpet:String,
                         Available:String,
                         NotAvailable:String,
                         onedog:Boolean,

     
                 services1:{type: Boolean, default: false},
                 first_aidkit:{type: Boolean,default: false},
                 senior_dog:{type: Boolean, default: false},
                 medication:{type: Boolean, default: false},
                 booking :{type: Boolean, default: false},
                 home_visit:{type: Boolean, default: false},
                 pet_training:{type: Boolean, default: false},
                 females_on:{type: Boolean, default: false},
                 open_play:{type: Boolean, default: false},
                 need_ticks:{type: Boolean, default: false},
                 ac_accomodation:{type: Boolean, default: false},
                 ac_charges:String,

                       
                                 //Rate for accomodation
                                  small:{
                                    type:String
                                  },
                                      medium:{
                                          type:String
                                      },
                                     large:{
                                        type:String
                                    },

                                    small_cat1:{
                                      type:String
                                    },
                                   
                                        medium_cat1:{
                                          type:String
                                        },
                                       
                                         
                     

                          pickdrop:{type: Boolean, default: false},
                                   
        //                             //    costperkm:[{
                                           
                                            ChargePerkm:String,
                                            MinCharge:String, 
                                            PickCharge:String,
                                            DropCharge:String,

                         Timings:{type: Boolean, default: false},   
                             //0to12 hour
                             SmallPawCharge:String,
                             MediumPawCharge:String,
                             largePawCharge:String,
                    
                        Food:{type: Boolean, default: false},
                      
                        MealCharge:String,
                        Conditions:String,
                            
          
                        

                   //   bank:[
                    //       {
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
     
                                
                    

    
                            
               //What kind of pets to you taken in         

                    //  dog:{type: Boolean, default: false},
                    
                    row_dynamic:{
                    type:Array
                    },
                    small_dog:{
                      type:Array
                      },
                      medium_dog:{
                        type:Array
                        },
                        large_dog:{
                          type:Array
                          },

                          cat1:{
                            type:Array
                          },
                          cat2:{
                            type:Array
                          },
                          Other1:{
                            type:Array
                          },
                          Other2:{
                            type:Array
                          },

                          small_dog1:{
                            type:Array
                            },
                            medium_dog1:{
                              type:Array
                              },
                              large_dog1:{
                                type:Array
                                },

                      
                                    noofpets:String,
                                   Typeofpets:String,         
                                     breed:String,
                                     gender:String,
                                    age:String,

                                        
    

                             image:String,
                             text:String
                          

                               
    
}));


   function validateHomeStay(home){
    const schema={
      row_dynamic:Joi,
      small_dog:Joi,
      medium_dog:Joi,
      large_dog:Joi,
      small_dog1:Joi,
      medium_dog1:Joi,
      large_dog1:Joi,
      cat1:Joi,
      cat2:Joi,
      Other1:Joi,
      Other2:Joi,

      text:Joi.string(),
          image:Joi.string(),
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
        drop:Joi.string(),
        pick:Joi.string(),
         maxpet:Joi.string(),
         Available:Joi.string(),
         NotAvailable:Joi.string(),
        
        onedog:Joi.boolean(),

        //any image shown below
        first_aidkit:Joi.boolean(),
        services1:Joi.boolean(),
        senior_dog:Joi.boolean(),
        medication:Joi.boolean(),
        booking :Joi.boolean(),
        home_visit:Joi.boolean(),
        pet_training:Joi.boolean(),
        females_on:Joi.boolean(),
        open_play:Joi.boolean(),
        need_ticks:Joi.boolean(),
        ac_accomodation:Joi.boolean(),
        ac_charges:Joi.string(),

        
          //Rate for accomodation
        small:Joi.string(),
        medium:Joi.string(),
        large:Joi.string(),
     
        small_cat1:Joi.string(),
        medium_cat1:Joi.string(),

        pickdrop:Joi.boolean(),
        ChargePerkm:Joi.string(),
        MinCharge:Joi.string(), 
        PickCharge:Joi.string(),
        DropCharge:Joi.string(),

        Timings:Joi.boolean(),
        //0to12 hour
        SmallPawCharge:Joi.string(),
        MediumPawCharge:Joi.string(),
        largePawCharge:Joi.string(),

       Food:Joi.boolean(),
       MealCharge:Joi.string(),
       Conditions:Joi.string(),

       bankname:Joi.string(),   
       accname:Joi.string(),
       branch:Joi.string(),
       accno:Joi.string(),
       ifsc:Joi.string(),
       mmid:Joi.string(),
       gst:Joi.string(),
       accotype:Joi.string(),
       writehere:Joi.string(),

        //What kind of pets to you taken in         
            noofpets:Joi,
            Typeofpets:Joi,         
             breed:Joi,
             gender:Joi,
            age:Joi,

           

    
       };
       return Joi.validate(home,schema);
   }
  

   module.exports.home=home;
   module.exports.validate=validateHomeStay;