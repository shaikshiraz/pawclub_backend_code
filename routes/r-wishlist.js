const {wishlist,validate}=require('../models/m-wishlist');
const express=require('express');
const router=express.Router();

var multer  = require('multer');
 // var upload = multer({ dest: 'uploads/' });
  
 
 // var app = express()
 
 var storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, 'uploads/medications/')
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
    const wish=await wishlist.find().sort('name');
    res.send(wish);
});//second parameter is call back function for  when we get request from http to the end point '/' and also call route handler.

router.post('/',upload.single('image'),async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //if invalid 404-bad equest
    if(error) return res.status(400).send(error.details[0].message);
        //400 bad request
        let wish=new wishlist({
            image:req.file.path,
            name:req.body.name,firstname:req.body.firstname, lastname:req.body.lastname,phoneno:req.body.phoneno,
            email:req.body.email,address1:req.body.address1,address2:req.body.address2,city:req.body.city,state:req.body.state,
            pincode:req.body.pincode, country:req.body.country ,




                           //What kind of pets to you taken in         

                    //  dog:req.body.age17,
                            
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

        //Name of the Pets
petName:req.body.petName,
Breed:req.body.Breed,
Dateofbirth:req.body.Dateofbirth,
//Pet Id Number
petId:req.body.petId,
//Vaccination records
Rabels:req.body.Rabels,
KennelCough:req.body.KennelCough,
Distemper:req.body.Distemper,
provo:req.body.provo,
//Adminstraion date

Adminstraion1:req.body.Adminstraion1,
Adminstraion2:req.body.Adminstraion2,
Adminstraion3:req.body.Adminstraion3,
Adminstraion4:req.body.Adminstraion4,

//Due Date
Due1:req.body.Due1,
Due2:req.body.Due2,
Due3:req.body.Due3,
Due4:req.body.Due4,

//Food Habit
MorningMeal:req.body.MorningMeal,
AfternoonMeal :req.body.AfternoonMeal,
EveningMeal:req.body.EveningMeal,
NightMeal:req.body.NightMeal,
OntheFloor:req.body.OntheFloor,
Mattress:req.body.Mattress,
Bed:req.body.Bed,
Sofa:req.body.Sofa,
Other:req.body.Other,

otherText:req.body.otherText,
//Walking timings
MorningWalk :req.body.MorningWalk,
AfternoonWalk :req.body.AfternoonWalk,
EveningWalk:req.body.EveningWalk,

//Like swimming
LikeSwim:req.body.LikeSwim,
//Are they okey left alone at home?
AloneHome:req.body.AloneHome,
//Friendly with people
FriendlyWithPeople:req.body.FriendlyWithPeople,
//Friendly with kids
FriendlyWithkids:req.body.FriendlyWithkids,
//Friendly with other dogs
FriendlyWithOtherDogs:req.body.FriendlyWithOtherDogs,
//Friendly with other cats
FriendlyWithOtherCats:req.body.FriendlyWithOtherCats,
//
//Currently under going Any medications
UnderGoing:req.body.UnderGoing,
Ongoing:req.body.Ongoing,

//Name Of Medications
petname:req.body.petname,
pettype:req.body.pettype,
OwnerName:req.body.OwnerName,
ownerPhoneno:req.body.ownerPhoneno,

petname1:req.body.petname1,
pettype1:req.body.pettype1,
OwnerName1:req.body.OwnerName1,
ownerPhoneno1:req.body.ownerPhoneno1,

petname2:req.body.petname2,
pettype2:req.body.pettype2,
OwnerName2:req.body.OwnerName2,
ownerPhoneno2:req.body.ownerPhoneno2,

petname3:req.body.petname3,
pettype3:req.body.pettype3,
OwnerName3:req.body.OwnerName3,
ownerPhoneno3:req.body.ownerPhoneno3,

petname4:req.body.petname4,
pettype4:req.body.pettype4,
OwnerName4:req.body.OwnerName4,
ownerPhoneno4:req.body.ownerPhoneno4,

MedicationName:req.body.MedicationName,
Timing:req.body.Timing,
AfterFood:req.body.AfterFood,

//Name OF Consulting doctors
DoctorName:req.body.DoctorName,
ContactNo:req.body.ContactNo,
//In Case of any emergencies Who do we Contacts
Emergencies:req.body.Emergencies,
EmergencyPhone:req.body.EmergencyPhone,

Like:req.body.Like,
Dislike:req.body.Dislike,
Others:req.body.Others,

//Responds to Commands
PawName:req.body.PawName,
Sit:req.body.Sit,
come:req.body.come,
walk:req.body.walk,
No:req.body.No,
stay:req.body.stay,


writehere:req.body.writehere,
Condition:req.body.Condition,
        
        });
        wish =await wish.save();
        res.send(wish);
});

router.put('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
        try{
            //look up the dog
            const wishn=await wishlist.findByIdAndUpdate(req.params.id,
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
            res.send(wish);//return updated dog 
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
        const wish=await wishlist.findByIdAndRemove(req.params.id);
        res.send(wish);//return delete do
       }
       //if not exists return 404 error
    catch(ex){
        res.status(404).send("The given do id was not found");
        }
   });

   router.get('/:id',async(req,res)=>{
     try{
         ////look up the dog
        const wish=await wishlist.findById(req.params.id);
        res.send(wish);
     }
     //if not exists return 404 error
     catch(ex){
        res.status(404).send("The given do id was not found");
     }
});

  
   module.exports=router;
