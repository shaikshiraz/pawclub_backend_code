const {kennel,validate}=require('../models/m-kennel');
const express=require('express');
 const router=express.Router();

 var multer  = require('multer');
 
 var storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, 'uploads/kennel/')
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



// router.get('/kennel',async(req,res)=>{
//     const kennels=await kennel.find();
//     res.send(kennels);
// });//second parameter is call back function for  when we get request from http to the end point '/' and also call route handler.
router.get('/',async(req,res)=>{
    const kennels=await kennel.find().sort('_id');
    res.send(kennels);
});
router.post('/',upload.single('image'),async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //if invalid 404-bad equest
    if(error) return res.status(400).send(error.details[0].message);
        //400 bad request
        let kennels=new kennel({
             //basic details
             image:req.file.path,
             name:req.body.name,firstname:req.body.firstname, lastname:req.body.lastname,phoneno:req.body.phoneno,
             email:req.body.email,address1:req.body.address1,address2:req.body.address2,city:req.body.city,state:req.body.state,
             pincode:req.body.pincode, country:req.body.country ,

                     //Operating Hours
        From: req.body.From,
        To: req.body.To,
        //Friendly with people
        people: req.body.people,
        //Friendly with kids
        kids: req.body.kids,
        //Friendly with other dogs
        otherdogs: req.body.otherdogs,
        //Friendly with other cats
        cats: req.body.cats,
        //Do you provide kibbles
        kibbles: req.body.kibbles,
        // What is the : per portion
        cost:req.body.cost,

        services: req.body.services,
        first_aidkit:req.body.first_aidkit,
        senior_dog: req.body.senior_dog,
        females_on: req.body.females_on,
        //Daily updates given to pet owners
        updates: req.body.updates,
        //Separate rooms for pets
        rooms: req.body.rooms,
        //Bath available on request on extra charge
        Bath: req.body.Bath,
        //Swimming pool available
        Swimming: req.body.Swimming,
        //Can Adminster oral medication if necessary
        medication: req.body.medication,
        //Instant booking allowed
        booking: req.body.booking,
        //Home visit mandatory
        home_visit: req.body.home_visit,
        //Do you take in only house trained pets
        pet_training: req.body.pet_training,
        //Need to be free from ticks
        need_ticks: req.body.need_ticks,
        //open play area
        open_play: req.body.open_play,
        // A/C accomodation Available
        ac_accomodation: req.body.ac_accomodation,
        ac_charges: req.body.ac_charges,

        //Do You Provide Pick and drop
        PickDrop: req.body.PickDrop,
        ChargePerkm: req.body.ChargePerkm,
        MinCharge: req.body.MinCharge,
        PickCharge: req.body.PickCharge,
        DropCharge: req.body.DropCharge,



        //  Day Care Services Provided(less Then 24hrs)
        //Timings
        Timings: req.body.Timings,
        //0to12 hour
        SmallPawCharge: req.body.SmallPawCharge,
        MediumPawCharge: req.body.MediumPawCharge,
        largePawCharge: req.body.largePawCharge,

        Food: req.body.Food,
        MealCharge: req.body.MealCharge,
        //Responds to Commands
        PawName: req.body.PawName,
        sit: req.body.sit,
        come: req.body.come,
        walk: req.body.walk,
        No: req.body.No,
        stay: req.body.stay,
 
             //bank details
 
             bankname:req.body.bankname,                                              
             accname:req.body.accname,
             branch:req.body.branch,
             accno:req.body.accno,
             ifsc:req.body.ifsc,
             mmid:req.body.mmid,
             gst:req.body.gst,
             accotype:req.body.accotype,
             Conditions:req.body.Conditions
        });
       kennels =await kennels.save();
        res.send(kennels);
});

router.put('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
        try{
            //look up the kennel
            const kennels=await kennel.findByIdAndUpdate(req.params.id,
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
            res.send(kennels);//return updated kennel 
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
        const kennels=await kennel.findByIdAndRemove(req.params.id);
        res.send(kennels);//return delete kennel
       }
       //if not exists return 404 error
    catch(ex){
        res.status(404).send("The given kennel id was not found");
        }
   });

   router.get('/:id',async(req,res)=>{
     try{
         ////look up the kennel
        const kennels=await kennel.findById(req.params.id);
        res.send(kennels);
     }
     //if not exists return 404 error
     catch(ex){
        res.status(404).send("The given kennel id was not found");
     }
});

  
   module.exports=router;
