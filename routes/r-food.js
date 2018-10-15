const auth=require('../middelware/auth');
const admin=require('../middelware/admin');
const {foo,validate}=require('../models/m-food');
const express=require('express');
 const router=express.Router();

 var multer  = require('multer');
 
 var storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, 'uploads/food/')
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
    
    const food=await foo.find().sort('name');
    res.send(food);
});//second parameter is call back function for  when we get request from http to the end point '/' and also call route handler.

router.post('/',upload.single('image'),async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //if invalid 404-bad equest
    if(error) return res.status(400).send(error.details[0].message);
        //400 bad request
        let food=new foo({
                    //personalmdetails
                     image:req.file.path,
                    name:req.body.name,
                    firstname:req.body.firstname, lastname:req.body.lastname,phoneno:req.body.phoneno,
                    email:req.body.email,address1:req.body.address1,address2:req.body.address2,city:req.body.city,state:req.body.state,
                    pincode:req.body.pincode, country:req.body.country ,

                    Refrigeration:req.body.Refrigeration,
                    order:req.body.order, 
                    ServiceArea:req.body.Area,
                    DeliverySchedule:req.body.DeliverySchedule,
                    DelivaryTimings:req.body.DelivaryTimings,
                    CostPerQuantity:req.body.CostPerQuantity,
        
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
                    dog:req.body.dog,
                   
                    
         //area
        area:req.body.area,
        // area_1:req.body.area_1,
        //  area_2:req.body.area_2,
        //  area_3:req.body.area_3,
        //  area_4:req.body.area_4,
        //  area_5:req.body.area_5,
        //inr
        food_INR:req.body.food_INR,
        //  food_INR_1:req.body.food_INR_1,
        //  food_INR_2:req.body.food_INR_2,
        //  food_INR_3:req.body.food_INR_3,
        //  food_INR_4:req.body.food_INR_4,
        //  food_INR_5:req.body.food_INR_5
        
        });
        food =await food.save();
        res.send(food);
});

router.put('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
        try{
            //look up the food
            const food=await foo.findByIdAndUpdate(req.params.id,{
               //personal details
                name:req.body.name,
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
            res.send(food);//return updated food 
           }
           //if not exists return 404 error
           catch(ex){
            res.status(404).send("The given food id was not found"); 
           }
         });

   router.delete('/:id',[auth,admin],async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
        //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
    try{
        //look up the food
        const foods=await foo.findByIdAndRemove(req.params.id);
        res.send(foods);//return delete food
       }
       //if not exists return 404 error
    catch(ex){
        res.status(404).send("The given food id was not found");
        }
   });

   router.get('/:id',async(req,res)=>{
     try{
         ////look up the food
        const food=await foo.findById(req.params.id);
        res.send(food);
     }
     //if not exists return 404 error
     catch(ex){
        res.status(404).send("The given food id was not found");
     }
});

  
   module.exports=router;
