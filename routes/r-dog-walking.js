const {dog,validate}=require('../models/m-dog-walking');
const express=require('express');
 const router=express.Router();

 var multer  = require('multer');
 
 var storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, 'uploads/dogwalking/')
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
    const dogs=await dog.find().sort('name');
    res.send(dogs);
});//second parameter is call back function for  when we get request from http to the end point '/' and also call route handler.

router.post('/',upload.single('image'),async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //if invalid 404-bad equest
    if(error) return res.status(400).send(error.details[0].message);
        //400 bad request
        let dogs=new dog({
            image:req.file.path,
            name:req.body.name,
            firstname:req.body.firstname, lastname:req.body.lastname,phoneno:req.body.phoneno,
            email:req.body.email,address1:req.body.address1,address2:req.body.address2,city:req.body.city,state:req.body.state,
            pincode:req.body.pincode, country:req.body.country ,


            // What are the timing that you are available to walk?
            Time1:req.body.TimeTime1,
            Time2:req.body.TimeTime2,
            Time3:req.body.TimeTime3,
            from:req.body.from,

            //Days and timings that you are available
            DayTime1:req.body.DayTime1,
            DayTime2:req.body.DayTime2,
            //Area that the service is available
            area:req.body.area,
            area1:req.body.area1,
            area2:req.body.area2,
            area3:req.body.area3,
            area4:req.body.area4,
            area5:req.body.area5,



            //Cost per Day
            costPerDay:req.body.costPerDay,
            //Timings/Cost Per day
            //Once a day
            //Small Paws
             small1:req.body.small1,
             small2:req.body.small2,
             small3:req.body.small3,
            //Twice a day
            //Medium Paws
            Medium1:req.body.Medium1,
            Medium2:req.body.Medium2, 
            Medium3:req.body.Medium,
            //Thrice a day
            //Large Paws
            Large1:req.body.Large1,
            Large2:req.body.Large2,
            Large3:req.body.Large3,

            //Breeds that you walk
            Breed:req.body.Breed,
            Breed1:req.body.Breed1,
            Breed2:req.body.Breed2,
            Breed3:req.body.Breed3,
            Breed4:req.body.Breed4,
            Breed5:req.body.Breed5,

            selectTime:req.body.selectTime,
            cost:req.body.cost,
            MaxBreed:req.body.MaxBreed,
            Conditions:req.body.Conditions,

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
        dogs =await dogs.save();
        res.send(dogs);
});

router.put('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
        try{
            //look up the dog
            const dogs=await dog.findByIdAndUpdate(req.params.id,{
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
            
            },{
                new:true
            });
            res.send(dogs);//return updated dog 
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
        const dogs=await dog.findByIdAndRemove(req.params.id);
        res.send(dogs);//return delete do
       }
       //if not exists return 404 error
    catch(ex){
        res.status(404).send("The given do id was not found");
        }
   });

   router.get('/:id',async(req,res)=>{
     try{
         ////look up the dog
        const dogs=await dog.findById(req.params.id);
        res.send(dogs);
     }
     //if not exists return 404 error
     catch(ex){
        res.status(404).send("The given do id was not found");
     }
});

  
   module.exports=router;
