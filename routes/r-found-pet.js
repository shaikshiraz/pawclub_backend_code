const {found,validate}=require('../models/m-found-pet');
const express=require('express');
 const router=express.Router();

 var multer  = require('multer');
 
 var storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, 'uploads/found-pet/')
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
    const f=await found.find().sort('name');
    res.send(f);
});//second parameter is call back function for  when we get request from http to the end point '/' and also call route handler.

router.post('/',upload.single('image'),async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //if invalid 404-bad equest
    if(error) return res.status(400).send(error.details[0].message);
        //400 bad request
        let f=new found({
              //basic details
              small_dog:req.body.small_dog,
              medium_dog:req.body.medium_dog,
              large_dog:req.body.large_dog,
        
              cat1:req.body.cat1,
              Other1:req.body.Other1,

              image:req.file.path,
              name:req.body.name,firstname:req.body.firstname, lastname:req.body.lastname,phoneno:req.body.phoneno,
              email:req.body.email,address1:req.body.address1,address2:req.body.address2,city:req.body.city,state:req.body.state,
              pincode:req.body.pincode, country:req.body.country ,

              foundDate:req.body.foundDate,
              foundLocation:req.body.foundLocation,
              landmark:req.body.landmark,
              medical :req.body.medical,   
              requires:req.body.requires,
              writehere:req.body.writehere,
              Conditions:req.body.Conditions,
            
              
              //Breed details
              noofpets:req.body.noofpets,
              max:req.body.max,
              Typeofpets:req.body.Typeofpets,         
               breed:req.body.breed,
               gender:req.body.gender,
              age:req.body.age,
  
              noofpets1:req.body.noofpets1,
              max1:req.body.max1,
              Typeofpets1:req.body.Typeofpets1,         
               breed1:req.body.breed1,
               gender1:req.body.gender1,
              age1:req.body.age1,
  
              noofpets2:req.body.noofpets2,
              max2:req.body.max2,
              Typeofpets2:req.body.Typeofpets2,         
               breed2:req.body.breed2,
               gender2:req.body.gender2,
              age2:req.body.age2,
  
              noofpets3:req.body.noofpets3,
              max3:req.body.max3,
              Typeofpets3:req.body.Typeofpets3,         
               breed3:req.body.breed3,
               gender3:req.body.gender3,
              age3:req.body.age3,
  
              noofpets4:req.body.noofpets4,
              max4:req.body.max4,
              Typeofpets4:req.body.Typeofpets4,         
               breed4:req.body.breed4,
               gender4:req.body.gender4,
              age4:req.body.age4,
  
              noofpets5:req.body.noofpets5,
              max5:req.body.max5,
              Typeofpets5:req.body.Typeofpets5,         
               breed5:req.body.breed5,
               gender5:req.body.gender5,
              age5:req.body.age5,
  
        
  
  // cat:{type: Boolean, default: false},
       
  noofpets6:req.body.noofpets6,
  max6:req.body.max6,
  Typeofpets6:req.body.Typeofpets6,         
  breed6:req.body.breed6,
  gender6:req.body.gender6,
  age6:req.body.age6,
  
  noofpets7:req.body.noofpets7,
  max7:req.body.max7,
  Typeofpets7:req.body.Typeofpets7,         
  breed7:req.body.breed7,
  gender7:req.body.gender7,
  age7:req.body.age7,
  
  noofpets8:req.body.noofpets8,
  max8:req.body.max8,
  Typeofpets8:req.body.Typeofpets8,         
  breed8:req.body.breed8,
  gender8:req.body.gender8,
  age8:req.body.age8,
  
  noofpets9:req.body.noofpets9,
  max9:req.body.max9,
  Typeofpets9:req.body.Typeofpets9,         
  breed9:req.body.breed9,
  gender9:req.body.gender9,
  age9:req.body.age9,
  
  noofpets10:req.body.noofpets10,
  max10:req.body.max10,
  Typeofpets10:req.body.Typeofpets10,         
  breed10:req.body.breed10,
  gender10:req.body.gender10,
  age10:req.body.age10,
  
  noofpets11:req.body.noofpets11,
  max11:req.body.max11,
  Typeofpets11:req.body.Typeofpets11,         
  breed11:req.body.breed11,
  gender11:req.body.gender11,
  age11:req.body.age11,
       
   
  
  //   other:{type: Boolean, default: false},
   
  noofpets12:req.body.noofpet12,
  max12:req.body.max12,
  Typeofpets12:req.body.Typeofpets12,         
  breed12:req.body.breed12,
  gender12:req.body.gender12,
  age12:req.body.age12,
  
  noofpets13:req.body.noofpets13,
  max13:req.body.max13,
  Typeofpets13:req.body.Typeofpets13,         
  breed13:req.body.breed13,
  gender13:req.body.gender13,
  age13:req.body.age13,
  
  noofpets14:req.body.noofpets14,
  max14:req.body.max14,
  Typeofpets14:req.body.Typeofpets14,         
  breed14:req.body.breed14,
  gender14:req.body.gender14,
  age14:req.body.age14,
  
  noofpets15:req.body.noofpets15,
  max15:req.body.max15,
  Typeofpets15:req.body.Typeofpets15,         
  breed15:req.body.breed15,
  gender15:req.body.gender15,
  age15:req.body.age15,
  
  noofpets16:req.body.noofpets16,
  max16:req.body.max16,
  Typeofpets16:req.body.Typeofpets16,         
  breed16:req.body.breed16,
  gender16:req.body.gender16,
  age16:req.body.age16,
  
  noofpets17:req.body.noofpets17,
  max17:req.body.max17,
  Typeofpets17:req.body.Typeofpets17,         
  breed17:req.body.breed17,
  gender17:req.body.gender17,
  age17:req.body.age17,
  
           
            });
        f =await f.save();
        res.send(f);
});

router.put('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
        try{
            //look up the dog
            const f=await found.findByIdAndUpdate(req.params.id,{
                
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
            res.send(f);//return updated dog 
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
        const f=await found.findByIdAndRemove(req.params.id);
        res.send(f);//return delete do
       }
       //if not exists return 404 error
    catch(ex){
        res.status(404).send("The given do id was not found");
        }
   });

   router.get('/:id',async(req,res)=>{
     try{
         ////look up the dog
        const f=await found.findById(req.params.id);
        res.send(f);
     }
     //if not exists return 404 error
     catch(ex){
        res.status(404).send("The given do id was not found");
     }
});

  
   module.exports=router;
