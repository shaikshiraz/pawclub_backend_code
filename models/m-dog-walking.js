const Joi=require('joi');
const mongoose=require('mongoose');

const dog=mongoose.model('dogwalking',new mongoose.Schema(
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

                                // What are the timing that you are available to walk?
                                 Time1:String,
                                 Time2:String,
                                 Time3:String,
                                 from:String,

                                 //Days and timings that you are available
                                 DayTime1:String,
                                 DayTime2:String,
                                 //Area that the service is available
                                 area:String,
                                //  area1:String,
                                //  area2:String,
                                //  area3:String,
                                //  area4:String,
                                //  area5:String,



                                 //Cost per Day
                                 costPerDay:{type: Boolean, default: false},
                                 //Timings/Cost Per day
                                 //Once a day
                                 //Small Paws
                                  small1:String,
                                  small2:String,
                                  small3:String,
                                 //Twice a day
                                 //Medium Paws
                                 Medium1:String,
                                 Medium2:String, 
                                 Medium3:String,
                                 //Thrice a day
                                 //Large Paws
                                 Large1:String,
                                 Large2:String,
                                 Large3:String,

                                 //Breeds that you walk
                                 Breed:String,
                                //  Breed1:String,
                                //  Breed2:String,
                                //  Breed3:String,
                                //  Breed4:String,
                                //  Breed5:String,

                                 selectTime:String,
                                 cost:String,
                                 MaxBreed:String,
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


   function validateDog(dog){
    const schema={
         // image:Joi.string(),
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
       // What are the timing that you are available to walk?
       Time1:Joi.string(),
       Time2:Joi.string(),
       Time3:Joi.string(),
       from:Joi.string(),

       //Days and timings that you are available
       DayTime1:Joi.string(),
       DayTime2:Joi.string(),
       //Area that the service is available
       area:Joi.string(),
      //  area1:Joi.string(),
      //  area2:Joi.string(),
      //  area3:Joi.string(),
      //  area4:Joi.string(),
      //  area5:Joi.string(),



       //Cost per Day
       costPerDay:Joi.boolean(),
       //Timings/Cost Per day
       //Once a day
       //Small Paws
        small1:Joi.string(),
        small2:Joi.string(),
        small3:Joi.string(),
       //Twice a day
       //Medium Paws
       Medium1:Joi.string(),
       Medium2:Joi.string(), 
       Medium3:Joi.string(),
       //Thrice a day
       //Large Paws
       Large1:Joi.string(),
       Large2:Joi.string(),
       Large3:Joi.string(),

       //Breeds that you walk
       Breed:Joi.string(),
      //  Breed1:Joi.string(),
      //  Breed2:Joi.string(),
      //  Breed3:Joi.string(),
      //  Breed4:Joi.string(),
      //  Breed5:Joi.string(),

       selectTime:Joi.string(),
       cost:Joi.string(),
       MaxBreed:Joi.string(),
       Conditions:Joi.string(),


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
        image:Joi.string(),
       };
       return Joi.validate(dog,schema);
   }


   module.exports.dog=dog;
   module.exports.validate=validateDog;