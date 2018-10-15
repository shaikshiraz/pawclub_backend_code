const {ngo,validate}=require('../models/m-ngo');
const express=require('express');
 const router=express.Router();

 var multer  = require('multer');
 
 var storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, 'uploads/ngo/')
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
    const ngos=await ngo.find().sort('name');
    res.send(ngos);
});//second parameter is call back function for  when we get request from http to the end point '/' and also call route handler.

router.post('/',upload.single('image'),async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //if invalid 404-bad equest
    if(error) return res.status(400).send(error.details[0].message);
        //400 bad request
        let ngos=new ngo({
              //basic details
              image:req.file.path,
              name:req.body.name,firstname:req.body.firstname, lastname:req.body.lastname,phoneno:req.body.phoneno,
              email:req.body.email,address1:req.body.address1,address2:req.body.address2,city:req.body.city,state:req.body.state,
              pincode:req.body.pincode, country:req.body.country ,

                //What we require

        require:req.body.require,
        website:req.body.website,
        AboutNgo:req.body.AboutNgo,
        Conditions:req.body.Conditions,

        //   bank:[
        //       {
        bankname:req.body.bankname,
        accname: req.body.accname,
        branch: req.body.branch,
        accno: req.body.accno,
        ifsc:req.body.ifsc,
        mmid: req.body.mmid,
        gst: req.body.gst,
        accotype: req.body.accotype,
        writehere:req.body.writehere,
        });
        ngos =await ngos.save();
        res.send(ngos);
});

router.put('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
        try{
            //look up the dog
            const ngos=await ngo.findByIdAndUpdate(req.params.id,
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
            res.send(ngos);//return updated dog 
           }
           //if not exists return 404 error
           catch(ex){
            res.status(404).send("The given dog id was not lost"); 
           }
         });

   router.delete('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
        //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
    try{
        //look up the do
        const ngos=await ngo.findByIdAndRemove(req.params.id);
        res.send(ngos);//return delete do
       }
       //if not exists return 404 error
    catch(ex){
        res.status(404).send("The given do id was not lost");
        }
   });

   router.get('/:id',async(req,res)=>{
     try{
         ////look up the dog
        const ngos=await ngo.findById(req.params.id);
        res.send(ngos);
     }
     //if not exists return 404 error
     catch(ex){
        res.status(404).send("The given do id was not lost");
     }
});

  
   module.exports=router;
