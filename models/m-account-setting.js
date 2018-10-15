const Joi=require('joi');
const mongoose=require('mongoose');

const account=mongoose.model('account',new mongoose.Schema(
    {        
    name:{
       type:String,
       required:true,
       minlength:3,
       maxlength:50
        }
   }));


   function validateAccount(account){
    const schema={
        name:Joi.string().min(3).required(),
       };
       return Joi.validate(account,schema);
   }


   module.exports.account=account;
   module.exports.validate=validateAccount;