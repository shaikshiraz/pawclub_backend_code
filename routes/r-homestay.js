const {home,validate}=require('../models/m-homestay');
const express=require('express');
 const router=express.Router();
 const _=require('lodash');
 const admin=require('../middelware/admin');

var multer  = require('multer');
// var upload = multer({ dest: 'uploads/' });
 

// var app = express()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/homestay/')
    },
    filename: function (req, file, cb) {
        const ext=file.mimetype.split('/')[1];
      cb(null, file.originalname + '-' + Date.now()+'.'+ext);
    }
  });
  
 const fileFilter=(req,file,cb)=>{
    if(!file){
        cb();
    }
 const image=file.mimetype.startsWith('image/');
 if(image){
     cb(null,true);
 }else{
     cb({message:"file is not supported"},false);
 }
   };
  var upload = multer({ storage: storage,
      fileFilter:fileFilter
});


// router.post('/',, function (req, res, next) {
  
//     // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// })








router.get('/',async(req,res)=>{
    const homestay=await home.find().sort('_id');
    res.send(homestay);
    console.log(homestay);
});//second parameter is call back function for  when we get request from http to the end point '/' and also call route handler.
//u
router.post('/',async(req,res)=>{
     const homestaysearch=await home.find()
     .or([{city:req.body.city},{name:req.body.name}])
     .sort('_id');
    // console.log(req.body.city);

     res.send(homestaysearch);
 });//second parameter is call back function for  when we get request from http to the end point '/' and also call route handler.
//u

router.post('/' ,upload.single('image'),async(req,res)=>{
    console.log(req.file);
    const {error}=validate(req.body);//object destructuring
    //400 bad request,
    if(error) return res.status(400).send(error.details[0].message);
        //   let t=new home(_.pick(req.file.path,['image']));
      
        let t=new home({ 
      //personal details 
      
      row_dynamic:req.body.row_dynamic,
      small_dog:req.body.small_dog,
      medium_dog:req.body.medium_dog,
      large_dog:req.body.large_dog,

      small_dog1:req.body.small_dog1,
      medium_dog1:req.body.medium_dog1,
      large_dog1:req.body.large_dog1,

      cat1:req.body.cat1,
      cat2:req.body.cat2,

      Other1:req.body.Other1,
      Other2:req.body.Other2,



      image:req.file.path,
      text:req.body.text,
      name:req.body.name,  firstname:req.body.firstname,lastname:req.body.lastname,phoneno:req.body.phoneno,
      email:req.body.email,address1:req.body.address1,address2:req.body.address2,city:req.body.city,
      state:req.body.state,pincode:req.body.pincode,country:req.body.country,
     
      drop:req.body.drop, 
      pick:req.body.pick,maxpet:req.body.maxpet,
      Available:req.body.Available, NotAvailable:req.body.NotAvailable,onedog:req.body.onedog,      
     
      ac_accomodation:req.body.ac_accomodation,
      services1:req.body.services1,
      first_aidkit:req.body.first_aidkit,

      senior_dog:req.body.senior_dog,
      medication:req.body.medication,
      booking :req.body.booking,
      home_visit:req.body.home_visit,
      pet_training:req.body.pet_training,
      females_on:req.body.females_on,
      open_play:req.body.open_play,
      need_ticks:req.body.need_ticks,

         //Rate for accomodation
         small:req.body.small,
         medium:req.body.medium,  
         large:req.body.large,
         small_cat1: req.body.small_cat1,
         medium_cat1:req.body.medium_cat1,
                          
           pickdrop:req.body.pickdrop,
                                         
              //                             //    costperkm:[{
                                                 
                                                  ChargePerkm:req.body.ChargePerkm,
                                                  MinCharge:req.body.MinCharge, 
                                                  PickCharge:req.body.PickCharge,
                                                  DropCharge:req.body.DropCharge,
      
                               Timings:req.body.Timings,   
                                   //0to12 hour
                                   SmallPawCharge:req.body.SmallPawCharge,
                                   MediumPawCharge:req.body.MediumPawCharge,
                                   largePawCharge:req.body.largePawCharge,
                          
                              Food:req.body.Food,
                            
                              MealCharge:req.body.MealCharge,
                              Conditions:req.body.Conditions,
                                  
                
                              
      
                         //   bank:[
                          //       {
                                     bankname:req.body.bankname,         
                                     accname:req.body.accname,
                                     branch:req.body.branch,
                                     accno:req.body.accno, 
                                     ifsc:req.body.ifsc,

                                      mmid:req.body.mmid,
                                      gst:req.body.gst,
                                      accotype:req.body.accotype,
                                      textArea:req.body.textArea,


                                              
               //What kind of pets to you taken in         

                    //  dog:{type: Boolean, default: false},
                            
            noofpets:req.body.noofpets,
            max:req.body.max,
            Typeofpets:req.body.Typeofpets,         
             breed:req.body.breed,
             gender:req.body.gender,
            age:req.body.age,

        });
        


       t =await t.save();
        res.send(t);
       
});

router.put('/:id',upload.single('image'),async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
        //400 bad request
        if(error)  return res.status(400).send(error.details[0].message);     
    try{
        //look up the home
        const t=await home.findByIdAndUpdate(req.params.id,{image:req.file.path},{
            new:true
        });
         //return updated home
        res.send(t);
    }
    //if not exists return 404 error
    catch(ex){
          res.status(404).send('given id is not found');
    }
});

   router.delete('/:id',async(req,res)=>{
        //look up the home
        try{
            const t=await home.findByIdAndRemove(req.params.id);
            res.send(t);
        }
         //if not exists return 404 error
        catch(ex){
            res.status(404).send('given id was not found');
             } 
   });

   router.get('/:id',async(req,res)=>{
       //look up the home
       try{
        const t=await home.findById(req.params.id);
        res.send(t);
        console.log(t);
       }
        //if not exists return 404 error
       catch(ex){
        res.status(404).send('given id was not found');
       }
    console.log(req.params.id);
});

  
   module.exports=router;
