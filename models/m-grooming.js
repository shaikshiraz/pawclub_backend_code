const Joi=require('joi');
const mongoose=require('mongoose');

const groom=mongoose.model('grooming',new mongoose.Schema(
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
                        
                           
                                     //Cost type of services
                                     serviceCost :{type: Boolean, default: false},    
                                     //Bath
                                     small:String,
                                      medium:String,
                                      large:String,
                                     //Haircut
                                      small1:String,
                                      medium1:String,
                                      large1:String,
                                     //Nailcut
                                      small2:String,
                                      medium2:String,
                                      large2:String,
                                      // Styling
                                      small3:String,
                                      medium3:String,
                                      large3:String,
                                      //Spa services
                                      small4:String,
                                      medium4:String,
                                      large4:String,
                                      //other
                                      small5:String,
                                      medium5:String,
                                      large5:String,

                                      otherServices:String,
    
                          // Do you provide these services at the customers place?
                                           
                          services :{type: Boolean, default: false},              
                          ServiceArea:String,
                          ExtraCharge:{type: Boolean, default: false},
                          HowMuch:String,  
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
        
                                 image:String,
                                 
   }));


   function validateGroom(groom){
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

      serviceCost:Joi.boolean(),
        //Bath
        small:Joi.string(),
        medium:Joi.string(),
        large:Joi.string(),
       //Haircut
        small1:Joi.string(),
        medium1:Joi.string(),
        large1:Joi.string(),
       //Nailcut
        small2:Joi.string(),
        medium2:Joi.string(),
        large2:Joi.string(),
        // Styling
        small3:Joi.string(),
        medium3:Joi.string(),
        large3:Joi.string(),
        //Spa services
        small4:Joi.string(),
        medium4:Joi.string(),
        large4:Joi.string(),
        //other
        small5:Joi.string(),
        medium5:Joi.string(),
        large5:Joi.string(),

        otherServices:Joi.string(),
   
         // Do you provide these services at the customers place?
        services :Joi.boolean(),           
        ServiceArea:Joi,
        ExtraCharge:Joi.boolean(),
        HowMuch:Joi.string(),  
        Conditions:Joi,
              
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
       return Joi.validate(groom,schema);
   }


   module.exports.groom=groom;
   module.exports.validate=validateGroom;