const jwt=require('jsonwebtoken');
const Joi=require('joi');
const config=require('config');
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {        
        name: {type: String},
       lastName:{type:String},
        phoneno:{type: String, unique: true},
        password: String,
        confirm:String,
         email: {type: String, unique: true},
         term:{type:String},
         resetPasswordToken: String,
         resetPasswordExpires: Date,
         isAdmin: {type: Boolean, default: false},
         memberSince : {type : Date, default : Date.now},
     facebook:{
            id:String,
            displayName:{type:String},
             email:{type: String, unique: true},
             givenName:String,
             familyName:String,
      }
            //  email:String,
            //  name:String
       
        //  isCustomer:{type: Boolean, default: false},
        //  isVender:{type: Boolean, default: false},
          

        
        });
userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id,isAdmin:this.isAdmin},'jwtPrivateKey');
    return token;
}

   
const User=mongoose.model('vender',userSchema);


   function validateUser(User){
    const schema={
      
            id:Joi,
            displayName:Joi,
            givenName:Joi,
            familyName:Joi,
            name:Joi,
        lastName:Joi,
        email:Joi,
        password:Joi,
        confirm:Joi,
        phoneno:Joi,
        isAdmin:Joi.boolean(),
         term:Joi.boolean(),
         memberSince:Joi.date(),
        //  lab:Joi.string(),
        //  names:Joi.string(),
        // isVender:Joi.boolean()
    
       };
       return Joi.validate(User,schema);
   }


   module.exports.User=User;
   module.exports.validate=validateUser;