const confi=require('config');
const jwt=require('jsonwebtoken');
const Joi=require('joi');
const bcrypt=require('bcrypt');
const _=require('lodash');
const {User,}=require('../models/user');
const express=require('express');
const router=express.Router();

router.post('/',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //if invalid 404-bad equest
    if(error) return res.status(400).send(error.details[0].message);

    let user=await User.findOne({email:req.body.email})
    if(!user) return res.status(400).send("user email or password is invalid");
    
    const validPassword= await bcrypt.compare(req.body.password,user.password)
     if(!validPassword) return res.status(400).send("user email or password is invalid");
     
     
     const token=user.generateAuthToken();
     const name=user.name;
     const lastName=user.lastName;
     const memberSince=user.memberSince;
     res.send({token,name,lastName,memberSince});
});

function validate(req){
    const schema={
        email:Joi.string().min(3).max(255).required().email(),
        password:Joi.string().min(3).max(255).required()
       };
       return Joi.validate(req,schema);
   }

module.exports=router;