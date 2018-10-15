const {profile,validate}=require('../models/m-profile');
const express=require('express');
 const router=express.Router();

 var multer  = require('multer');
 // var upload = multer({ dest: 'uploads/' });
  
 
 // var app = express()
 
 var storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, 'uploads/profile/')
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
    const m=await profile.find().sort('name');
    res.send(m);
});//second parameter is call back function for  when we get request from http to the end point '/' and also call route handler.

router.post('/',upload.single('image'),async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //if invalid 404-bad equest
    if(error) return res.status(400).send(error.details[0].message);
        //400 bad request
        let m=new profile({
            //basic details
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
           });
        m =await m.save();
        res.send(m);
});

router.put('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
        try{
            //look up the dog
            const m=await profile.findByIdAndUpdate(req.params.id,
                {
                    //basic details
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
            res.send(m);//return updated dog 
           }
           //if not exists return 404 error
           catch(ex){
            res.status(404).send("The given dog id was not found"); 
           }
         });

   router.delete('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
        //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
    try{
        //look up the do
        const m=await profile.findByIdAndRemove(req.params.id);
        res.send(m);//return delete do
       }
       //if not exists return 404 error
    catch(ex){
        res.status(404).send("The given do id was not found");
        }
   });

   router.get('/:id',async(req,res)=>{
     try{
         ////look up the dog
        const m=await profile.findById(req.params.id);
        res.send(m);
     }
     //if not exists return 404 error
     catch(ex){
        res.status(404).send("The given do id was not found");
     }
});

  
   module.exports=router;
