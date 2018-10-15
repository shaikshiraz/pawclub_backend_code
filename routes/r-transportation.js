const {trans,validate}=require('../models/m-transportation');
const express=require('express');
 const router=express.Router();

 var multer  = require('multer');
 // var upload = multer({ dest: 'uploads/' });
  
 
 // var app = express()
 
 var storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, 'uploads/transportation/')
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

router.get('/',async(req,res)=>{
    const t=await trans.find().sort('name');
    res.send(t);
});//second parameter is call back function for  when we get request from http to the end point '/' and also call route handler.

router.post('/',upload.single('image'),async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //if invalid 404-bad equest
    if(error) return res.status(400).send(error.details[0].message);
        //400 bad request
        let t=new trans({
            image:req.file.path,
            name:req.body.name,firstname:req.body.firstname, lastname:req.body.lastname,phoneno:req.body.phoneno,
            email:req.body.email,address1:req.body.address1,address2:req.body.address2,city:req.body.city,state:req.body.state,
            pincode:req.body.pincode, country:req.body.country ,

            Avialable: req.body.Avialable,
            //Airport pick /drop service provided
        
            Airport:req.body.Airport,
            //Cost
            //Small Paws
            small1: req.body.small1, 
            small2: req.body.small2,
            small3: req.body.small3,
            //Medium Paws
            Medium1: req.body.Medium1,
            Medium2: req.body.Medium2,
            Medium3: req.body.Medium3,
            //Large Paws
            Large1: req.body.Large1,
            Large2: req.body.Large2,
            Large3: req.body.Large3,
        
            //Cost per/km
        
            Costperkm: req.body.Costperkm,
            //Minimum charges
            Mincharge: req.body.Mincharge,
            Conditions: req.body.Conditions,
        

            //bank details

            bankname:req.body.bankname,                                              
            accname:req.body.accname,
            branch:req.body.branch,
            accno:req.body.accno,
            ifsc:req.body.ifsc,
            mmid:req.body.mmid,
            gst:req.body.gst,
            accotype:req.body.accotype,
        });
       t =await t.save();
        res.send(t);
});

router.put('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
        try{
            //look up the kennel
            const t=await trans.findByIdAndUpdate(req.params.id,
                {
                    name:req.body.name,firstname:req.body.firstname, lastname:req.body.lastname,phoneno:req.body.phoneno,
                    email:req.body.email,address1:req.body.address1,address2:req.body.address2,city:req.body.city,state:req.body.state,
                    pincode:req.body.pincode, country:req.body.country ,
        
                    //bank details
        
                    bankname:req.body.bankname,                                              
                    accname:req.body.accname,
                    branch:req.body.branch,
                    accno:req.body.accno,
                    ifsc:req.body.ifsc,
                    mmid:req.body.mmid,
                    gst:req.body.gst,
                    accotype:req.body.accotype,
                },
                {
                new:true
            });
            res.send(t);//return updated kennel 
           }
           //if not exists return 404 error
           catch(ex){
            res.status(404).send("The given kennel id was not found"); 
           }
         });

   router.delete('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
        //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
    try{
        //look up the kennel
        const t=await trans.findByIdAndRemove(req.params.id);
        res.send(t);//return delete kennel
       }
       //if not exists return 404 error
    catch(ex){
        res.status(404).send("The given kennel id was not found");
        }
   });

   router.get('/:id',async(req,res)=>{
     try{
         ////look up the kennel
        const t=await trans.findById(req.params.id);
        res.send(t);
     }
     //if not exists return 404 error
     catch(ex){
        res.status(404).send("The given kennel id was not found");
     }
});

  
   module.exports=router;
