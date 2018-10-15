const {groom,validate}=require('../models/m-grooming');
const express=require('express');
 const router=express.Router();

 var multer  = require('multer');
 
 var storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, 'uploads/grooming/')
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
    const g=await groom.find();
    res.send(g);
});//second parameter is call back function for  when we get request from http to the end point '/' and also call route handler.

router.post('/',upload.single('image'),async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //if invalid 404-bad equest
    if(error) return res.status(400).send(error.details[0].message);
        //400 bad request
        let g=new groom({
            //basic details
            image:req.file.path,
            name:req.body.name,  firstname:req.body.firstname,lastname:req.body.lastname,phoneno:req.body.phoneno,
            email:req.body.email,address1:req.body.address1,address2:req.body.address2,city:req.body.city,
            state:req.body.state,pincode:req.body.pincode,country:req.body.country,
           
            
            
                           //Cost type of services
                                 serviceCost:req.body.serviceCost,
                                     //Bath
                                     small:req.body.small,
                                     medium:req.body.medium,
                                     large:req.body.large,
                                    //Haircut
                                     small1:req.body.small1,
                                     medium1:req.body.medium1,
                                     large1:req.body.large1,
                                    //Nailcut
                                     small2:req.body.small2,
                                     medium2:req.body.medium2,
                                     large2:req.body.large2,
                                     // Styling
                                     small3:req.body.small3,
                                     medium3:req.body.medium3,
                                     large3:req.body.large3,
                                     //Spa services
                                     small4:req.body.small4,
                                     medium4:req.body.medium4,
                                     large4:req.body.large4,
                                     //other
                                     small5:req.body.small5,
                                     medium5:req.body.medium5,
                                     large5:req.body.large5,

                                     otherServices:req.body.otherServices,

                        // Do you provide these services at the customers place?
                                           
                          services :req.body.services,              
                          ServiceArea:req.body.ServiceArea,
                          ExtraCharge:req.body.ExtraCharge,
                          HowMuch:req.body.HowMuch, 
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
                                            writehere:req.body.textArea,
      
      
                
      

              });
        
        
        
        g =await g.save();
        res.send(g);
});

router.put('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
        try{
            //look up the dog
            const g=await groom.findByIdAndUpdate(req.params.id,
                {   name:req.body.name,
                    firstname:req.body.firstname, lastname:req.body.lastname,phoneno:req.body.phoneno,
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
            res.send(g);//return updated dog 
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
        const g=await groom.findByIdAndRemove(req.params.id);
        res.send(g);//return delete do
       }
       //if not exists return 404 error
    catch(ex){
        res.status(404).send("The given do id was not found");
        }
   });

   router.get('/:id',async(req,res)=>{
     try{
         ////look up the dog
        const g=await groom.findById(req.params.id);
        res.send(g);
     }
     //if not exists return 404 error
     catch(ex){
        res.status(404).send("The given do id was not found");
     }
});

  
   module.exports=router;
