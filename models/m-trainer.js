const Joi=require('joi');
const mongoose=require('mongoose');

const train=mongoose.model('trainer',new mongoose.Schema(
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

                             opentime:String,
                             closetime:String,
                             Available:String,
                             notAvailable:String,
                             BreadTraining:String,
                             Conditions:String,
                        
                           
                                     //Cost type of services
                                     services :{type: Boolean, default: false},    
                                     //Behavioral training
                                     session1:String,
                                     small:String,
                                      medium:String,
                                      large:String,
                                     //Obedience training
                                     session2:String,
                                      small1:String,
                                      medium1:String,
                                      large1:String,
                                     //Agility training
                                     session3:String,
                                      small2:String,
                                      medium2:String,
                                      large2:String,
                                      // Vocational training
                                      session4:String,
                                      small3:String,
                                      medium3:String,
                                      large3:String,
                                      //Therapy training
                                      session5:String,
                                      small4:String,
                                      medium4:String,
                                      large4:String,
                                      //other
                                      otherServices:String,
                                      small5:String,
                                      medium5:String,
                                      large5:String,

                                      
    
                      
                                
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
        
                                 image:String,
     
   }));


   function validateTrainer(train){
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


      opentime:Joi.string(),
      closetime:Joi.string(),
      Available:Joi.string(),
      notAvailable:Joi.string(),
      BreadTraining:Joi.string(),
      Conditions:Joi.string(),
 
    
              //Cost type of services
              services :Joi.boolean(),    
              //Behavioral training
              session1:Joi.string(),
              small:Joi.string(),
               medium:Joi.string(),
               large:Joi.string(),
              //Obedience training
              session2:Joi.string(),
               small1:Joi.string(),
               medium1:Joi.string(),
               large1:Joi.string(),
              //Agility training
              session3:Joi.string(),
               small2:Joi.string(),
               medium2:Joi.string(),
               large2:Joi.string(),
               // Vocational training
               session4:Joi.string(),
               small3:Joi.string(),
               medium3:Joi.string(),
               large3:Joi.string(),
               //Therapy training
               session5:Joi.string(),
               small4:Joi.string(),
               medium4:Joi.string(),
               large4:Joi.string(),
               //other
               otherServices:Joi.string(),
               small5:Joi.string(),
               medium5:Joi.string(),
               large5:Joi.string(),


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
       return Joi.validate(train,schema);
   }


   module.exports.train=train;
   module.exports.validate=validateTrainer;