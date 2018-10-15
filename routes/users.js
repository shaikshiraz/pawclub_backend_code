const auth=require('../middelware/auth');
// const Joi=require('joi');
// const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const _=require('lodash');
const {User,validate,}=require('../models/user');
const express=require('express');
const router=express.Router();


router.get('/me',async(req,res)=>{
   const user= await User.findById(req.user._id).select('-password');
   res.send(user);
});

router.get('/',async(req,res)=>{
    const user= await User.find().sort('name');
    res.send(user);
 });

router.post('/',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //if invalid 404-bad equest
    if(error) return res.status(400).send(error.details[0].message);

    let user=await User.findOne({email:req.body.email})
    if(user) return res.status(400).send("user is already registered");

    // if(user.isCustomer===user.isVender) return res.status(400).send("user is register");
    // // if(user.isVender===true) return res.status(400).send("user is register");
    user=new User({
         displayName:req.body.displayName,
         givenName:req.body.givenName,
         familyName:req.body.familyName,
         name:req.body.name,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        confirm:req.body.confirm,
        phoneno:req.body.phoneno,
        term:req.body.term,
        memberSince:req.body.memberSince,
        id:req.body.id,
       
       

    
});
    // _.pick(req.body,['name','LastName','email','password','Phoneno','confirm','isAdmin','Term'])

    const salt=await bcrypt.genSalt(10);
         user.password= await bcrypt.hash(user.password,salt);
         user.confirm= await bcrypt.hash(user.confirm,salt);
    await user.save();
    const token=user.generateAuthToken();
    // const token=jwt.sign({_id:user._id},'jwtPrivateKey');
    //  res.header('x-auth-token',token).send(_.pick(user,['name','email']));
    res.header('Authorization',token).send({token});;
    //  res.status(200).send({token});
});

router.get('/:id',async(req,res)=>{
    try{
        ////look up the trainer
       const t=await User.findById(req.params.id);
       res.send(t);
    }
    //if not exists return 404 error
    catch(ex){
       res.status(404).send("The given trainer id was not found");
    }
});
// /* GET users listing. */
// router.get('/', ensureAuthenticated, function(req, res, next) {
//     res.render('user', { user: req.user });
//   });

//   function ensureAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) { return next(); }
//     res.redirect('/login')
//   }



module.exports=router;