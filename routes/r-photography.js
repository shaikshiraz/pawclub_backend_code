const {photo,validate}=require('../models/m-photography');
const express=require('express');
 const router=express.Router();

 var multer  = require('multer');
 // var upload = multer({ dest: 'uploads/' });
  
 
 // var app = express()
 
 var storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, 'uploads/photo/')
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
    const p=await photo.find().sort('name');
    res.send(p);
});//second parameter is call back function for  when we get request from http to the end point '/' and also call route handler.

router.post('/',upload.single('image'),async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //if invalid 404-bad equest
    if(error) return res.status(400).send(error.details[0].message);
        //400 bad request
        let p=new photo({
             //basic details
             image:req.file.path,
             name:req.body.name,firstname:req.body.firstname, lastname:req.body.lastname,phoneno:req.body.phoneno,
             email:req.body.email,address1:req.body.address1,address2:req.body.address2,city:req.body.city,state:req.body.state,
             pincode:req.body.pincode, country:req.body.country ,

             Website:req.body.Website,
             Available :req.body.Available,
             //Cost
             noofShots:req.body.noofShots,
             PerHour:req.body.PerHour,
             HalfDay:req.body.HalfDay,
             Fullday:req.body.Fullday,

             //Comments / description
             Comments:req.body.Comments,
            // Terms and Conditions
            Condition:req.body.Condition,
 
             //bank details
 
             bankname:req.body.bankname,                                              
             accname:req.body.accname,
             branch:req.body.branch,
             accno:req.body.accno,
             ifsc:req.body.ifsc,
             mmid:req.body.mmid,
             gst:req.body.gst,
             accotype:req.body.accotype,
             writehere:req.body.writehere,
        });
        p =await p.save();
        res.send(p);
});

router.put('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
        try{
            //look up the dog
            const p=await photo.findByIdAndUpdate(req.params.id,
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
            res.send(p);//return updated dog 
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
        const p=await photo.findByIdAndRemove(req.params.id);
        res.send(p);//return delete do
       }
       //if not exists return 404 error
    catch(ex){
        res.status(404).send("The given do id was not found");
        }
   });

   router.get('/:id',async(req,res)=>{
     try{
         ////look up the dog
        const p=await photo.findById(req.params.id);
        res.send(p);
     }
     //if not exists return 404 error
     catch(ex){
        res.status(404).send("The given do id was not found");
     }
});

  
   module.exports=router;
