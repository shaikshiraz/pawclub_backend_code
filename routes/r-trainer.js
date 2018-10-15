const {train,validate}=require('../models/m-trainer');
const express=require('express');
 const router=express.Router();

 var multer  = require('multer');
 // var upload = multer({ dest: 'uploads/' });
  
 
 // var app = express()
 
 var storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, 'uploads/trainer/')
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
    const t=await train.find().sort('name');
    res.send(t);
});//second parameter is call back function for  when we get request from http to the end point '/' and also call route handler.

router.post('/',upload.single('image'),async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //if invalid 404-bad equest
    if(error) return res.status(400).send(error.details[0].message);
        //400 bad request
        let t=new train({
            image:req.file.path,
            name:req.body.name,firstname:req.body.firstname, lastname:req.body.lastname,phoneno:req.body.phoneno,
            email:req.body.email,address1:req.body.address1,address2:req.body.address2,city:req.body.city,state:req.body.state,
            pincode:req.body.pincode, country:req.body.country ,


            
            opentime:req.body.opentime,
            closetime:req.body.closetime,
            Available:req.body.Available,
            notAvailable:req.body.notAvailable,
            BreadTraining:req.body.BreadTraining,
            Conditions:req.body.Conditions,
       
          
                    //Cost type of services
                    services :req.body.services,    
                    //Behavioral training
                    session1:req.body.session1,
                    small:req.body.small,
                     medium:req.body.medium,
                     large:req.body.large,
                    //Obedience training
                    session2:req.body.session2,
                     small1:req.body.small1,
                     medium1:req.body.medium1,
                     large1:req.body.large1,
                    //Agility training
                    session3:req.body.session3,
                     small2:req.body.small2,
                     medium2:req.body.medium2,
                     large2:req.body.large2,
                     // Vocational training
                     session4:req.body.session4,
                     small3:req.body.small3,
                     medium3:req.body.medium3,
                     large3:req.body.large3,
                     //Therapy training
                     session5:req.body.session5,
                     small4:req.body.small4,
                     medium4:req.body.medium4,
                     large4:req.body.large4,
                     //other
                     otherServices:req.body.otherServices,
                     small5:req.body.small5,
                     medium5:req.body.medium5,
                     large5:req.body.large5,
            //bank details

            bankname:req.body.bankname,                                              
            accname:req.body.accname,
            branch:req.body.branch,
            accno:req.body.accno,
            ifsc:req.body.ifsc,
            mmid:req.body.mmid,
            gst:req.body.gst,
            accotype:req.body.accotype,
            writehere:req.body.writehere
        });
        t =await t.save();
        res.send(t);
});

router.put('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
        try{
            //look up the trainer
            const t=await train.findByIdAndUpdate(req.params.id,
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
            res.send(t);//return updated trainer 
           }
           //if not exists return 404 error
           catch(ex){
            res.status(404).send("The given trainer id was not found"); 
           }
         });

   router.delete('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
        //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
    try{
        //look up the trainer
        const t=await train.findByIdAndRemove(req.params.id);
        res.send(t);//return delete trainer
       }
       //if not exists return 404 error
    catch(ex){
        res.status(404).send("The given trainer id was not found");
        }
   });

   router.get('/:id',async(req,res)=>{
     try{
         ////look up the trainer
        const t=await train.findById(req.params.id);
        res.send(t);
     }
     //if not exists return 404 error
     catch(ex){
        res.status(404).send("The given trainer id was not found");
     }
});

  
   module.exports=router;
