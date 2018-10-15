const Joi=require('joi');
const mongoose=require('mongoose');

const pet=mongoose.model('petProfiles',new mongoose.Schema(
    {        
        name:{
            type:String,
            //   required:true,
               },
        
                firstname:{
                    type:String,
                   
                     },
                     lastname:{
                        type:String,
                         },
                         phoneno:{
                            type:String,
                           
                            minlength:10
                                },
                       email:{
                            type:String,
                           
                              },
                         
                             
        
                                address1:{type:String,
                                           maxlength:50,
                                          
                                          },
                                 address2:{type:String,
                                           maxlength:50,
                                          },
                                 city:{type:String,},
                                 state:{type:String,},
                                 pincode:{type:String,},
                                 country:{type:String,},

                                    //What kind of pets to you taken in         

                    //  dog:Joi.boolean(),
                            
                    small_dog:{
                      type:Array
                      },
                      medium_dog:{
                        type:Array
                        },
                        large_dog:{
                          type:Array
                          },
                  
                          cat1:{
                            type:Array
                          },
                      
                          Other1:{
                            type:Array
                          },  
                          Medications:{
                            type:Array
                          },                        
        //                         // max:[{
          noofpets:String,
          Typeofpets:String,         
           breed:String,
           gender:String,
          age:String,

        //   noofpets1:String,
        //   Typeofpets1:String,         
        //    breed1:String,
        //    gender1:String,
        //   age1:String,

        //   noofpets2:String,
        //   Typeofpets2:String,         
        //    breed2:String,
        //    gender2:String,
        //   age2:String,

        //   noofpets3:String,
        //   Typeofpets3:String,         
        //    breed3:String,
        //    gender3:String,
        //   age3:String,

        //   noofpets4:String,
        //   Typeofpets4:String,         
        //    breed4:String,
        //    gender4:String,
        //   age4:String,

        //   noofpets5:String,
        //   Typeofpets5:String,         
        //    breed5:String,
        //    gender5:String,
        //   age5:String,

    

// cat:{type: Boolean, default: false},
   
noofpets6:String,
// max6:String,
Typeofpets6:String,         
breed6:String,
gender6:String,
age6:String,

// noofpets7:String,
// Typeofpets7:String,         
// breed7:String,
// gender7:String,
// age7:String,

// noofpets8:String,
// Typeofpets8:String,         
// breed8:String,
// gender8:String,
// age8:String,

// noofpets9:String,
// Typeofpets9:String,         
// breed9:String,
// gender9:String,
// age9:String,

// noofpets10:String,
// Typeofpets10:String,         
// breed10:String,
// gender10:String,
// age10:String,

// noofpets11:String,
// Typeofpets11:String,         
// breed11:String,
// gender11:String,
// age11:String,
   


//   other:{type: Boolean, default: false},

noofpets12:String,
Typeofpets12:String,         
breed12:String,
gender12:String,
age12:String,

// noofpets13:String,
// Typeofpets13:String,         
// breed13:String,
// gender13:String,
// age13:String,

// noofpets14:String,
// Typeofpets14:String,         
// breed14:String,
// gender14:String,
// age14:String,

// noofpets15:String,
// Typeofpets15:String,         
// breed15:String,
// gender15:String,
// age15:String,

// noofpets16:String,
// Typeofpets16:String,         
// breed16:String,
// gender16:String,
// age16:String,

// noofpets17:String,
// Typeofpets17:String,         
// breed17:String,
// gender17:String,
// age17:String,

//Name of the Pets
petName:String,
Breed:String,
Dateofbirth:String,
//Pet Id Number
petId:String,
//Vaccination records
Rabels:{type: Boolean, default: false},
KennelCough:{type: Boolean, default: false},
Distemper:{type: Boolean, default: false},
provo:{type: Boolean, default: false},
//Adminstraion date

Adminstraion1:String,
Adminstraion2:String,
Adminstraion3:String,
Adminstraion4:String,

//Due Date
Due1:String,
Due2:String,
Due3:String,
Due4:String,

//Food Habit
MorningMeal:{type: Boolean, default: false},
AfternoonMeal :{type: Boolean, default: false},
EveningMeal:{type: Boolean, default: false},
NightMeal:{type: Boolean, default: false},
OntheFloor:{type: Boolean, default: false},
Mattress:{type: Boolean, default: false},
Bed:{type: Boolean, default: false},
Sofa:{type: Boolean, default: false},
Other:{type: Boolean, default: false},

otherText:String,
//Walking timings
MorningWalk :{type: Boolean, default: false},
AfternoonWalk :{type: Boolean, default: false},
EveningWalk:{type: Boolean, default: false},

//Like swimming
LikeSwim:String,
//Are they okey left alone at home?
AloneHome:String,
//Friendly with people
FriendlyWithPeople:String,
//Friendly with kids
FriendlyWithkids:String,
//Friendly with other dogs
FriendlyWithOtherDogs:String,
//Friendly with other cats
FriendlyWithOtherCats:String,
//
//Currently under going Any medications
UnderGoing:String,
Ongoing:String,

//Name Of Medications
petname:String,
pettype:String,
OwnerName:String,
ownerPhoneno:String,

petname1:String,
pettype1:String,
OwnerName1:String,
ownerPhoneno1:String,

petname2:String,
pettype2:String,
OwnerName2:String,
ownerPhoneno2:String,

petname3:String,
pettype3:String,
OwnerName3:String,
ownerPhoneno3:String,

petname4:String,
pettype4:String,
OwnerName4:String,
ownerPhoneno4:String,

MedicationName:String,
Timing:String,
AfterFood:String,

//Name OF Consulting doctors
DoctorName:String,
ContactNo:String,
//In Case of any emergencies Who do we Contacts
Emergencies:String,
EmergencyPhone:String,

Like:String,
Dislike:String,
Others:String,

//Responds to Commands
PawName:String,
Sit:String,
come:String,
walk:String,
No:String,
stay:String,

image:String,
writehere:String,
Condition:String,



          }));


   function validatePet(pets){
    const schema={
         image:Joi.string(),
         small_dog:Joi,
         medium_dog:Joi,
         large_dog:Joi,
         cat1:Joi,
         Other1:Joi,
         Medications:Joi,

        //personal details
        name:Joi.string(),
      firstname:Joi.string(),
      lastname:Joi.string(),
       phoneno:Joi.string(),
       email:Joi.string().email(),
      // //  address:Joi.required(),
       address1:Joi.string(),
      address2:Joi.string(),
      city:Joi.string(),
      state:Joi.string(),
      country:Joi.string(),
      pincode:Joi.string(),

        //What kind of pets to you taken in         

                    //  dog:{type: Boolean, default: false},
                            
                                
        //                         // max:[{
          noofpets:Joi.string(),
          Typeofpets:Joi.string(),         
           breed:Joi.string(),
           gender:Joi.string(),
          age:Joi.string(),

        //   noofpets1:Joi.string(),
        //   Typeofpets1:Joi.string(),         
        //    breed1:Joi.string(),
        //    gender1:Joi.string(),
        //   age1:Joi.string(),

        //   noofpets2:Joi.string(),
        //   Typeofpets2:Joi.string(),         
        //    breed2:Joi.string(),
        //    gender2:Joi.string(),
        //   age2:Joi.string(),

        //   noofpets3:Joi.string(),
        //   Typeofpets3:Joi.string(),         
        //    breed3:Joi.string(),
        //    gender3:Joi.string(),
        //   age3:Joi.string(),

        //   noofpets4:Joi.string(),
        //   Typeofpets4:Joi.string(),         
        //    breed4:Joi.string(),
        //    gender4:Joi.string(),
        //   age4:Joi.string(),

        //   noofpets5:Joi.string(),
        //   Typeofpets5:Joi.string(),         
        //    breed5:Joi.string(),
        //    gender5:Joi.string(),
        //   age5:Joi.string(),

    

// cat:{type: Boolean, default: false},
   
noofpets6:Joi.string(),
// max6:Joi.string(),
Typeofpets6:Joi.string(),         
breed6:Joi.string(),
gender6:Joi.string(),
age6:Joi.string(),

// noofpets7:Joi.string(),
// Typeofpets7:Joi.string(),         
// breed7:Joi.string(),
// gender7:Joi.string(),
// age7:Joi.string(),

// noofpets8:Joi.string(),
// Typeofpets8:Joi.string(),         
// breed8:Joi.string(),
// gender8:Joi.string(),
// age8:Joi.string(),

// noofpets9:Joi.string(),
// Typeofpets9:Joi.string(),         
// breed9:Joi.string(),
// gender9:Joi.string(),
// age9:Joi.string(),

// noofpets10:Joi.string(),
// Typeofpets10:Joi.string(),         
// breed10:Joi.string(),
// gender10:Joi.string(),
// age10:Joi.string(),

// noofpets11:Joi.string(),
// Typeofpets11:Joi.string(),         
// breed11:Joi.string(),
// gender11:Joi.string(),
// age11:Joi.string(),
   


//   other:{type: Boolean, default: false},

noofpets12:Joi.string(),
Typeofpets12:Joi.string(),         
breed12:Joi.string(),
gender12:Joi.string(),
age12:Joi.string(),

// noofpets13:Joi.string(),
// Typeofpets13:Joi.string(),         
// breed13:Joi.string(),
// gender13:Joi.string(),
// age13:Joi.string(),

// noofpets14:Joi.string(),
// Typeofpets14:Joi.string(),         
// breed14:Joi.string(),
// gender14:Joi.string(),
// age14:Joi.string(),

// noofpets15:Joi.string(),
// Typeofpets15:Joi.string(),         
// breed15:Joi.string(),
// gender15:Joi.string(),
// age15:Joi.string(),

// noofpets16:Joi.string(),
// Typeofpets16:Joi.string(),         
// breed16:Joi.string(),
// gender16:Joi.string(),
// age16:Joi.string(),

// noofpets17:Joi.string(),
// Typeofpets17:Joi.string(),         
// breed17:Joi.string(),
// gender17:Joi.string(),
// age17:Joi.string(),

//Name of the Pets
petName:Joi.string(),
Breed:Joi,
Dateofbirth:Joi.string(),
//Pet Id Number
petId:Joi.string(),
//Vaccination records
Rabels:Joi.boolean(),
KennelCough:Joi.boolean(),
Distemper:Joi.boolean(),
provo:Joi.boolean(),
//Adminstraion date

Adminstraion1:Joi.string(),
Adminstraion2:Joi.string(),
Adminstraion3:Joi.string(),
Adminstraion4:Joi.string(),

//Due Date
Due1:Joi.string(),
Due2:Joi.string(),
Due3:Joi.string(),
Due4:Joi.string(),

//Food Habit
MorningMeal:Joi.boolean(),
AfternoonMeal :Joi.boolean(),
EveningMeal:Joi.boolean(),
NightMeal:Joi.boolean(),
OntheFloor:Joi.boolean(),
Mattress:Joi.boolean(),
Bed:Joi.boolean(),
Sofa:Joi.boolean(),
Other:Joi.boolean(),

otherText:Joi.string(),
//Walking timings
MorningWalk :Joi.boolean(),
AfternoonWalk :Joi.boolean(),
EveningWalk:Joi.boolean(),

//Like swimming
LikeSwim:Joi.string(),
//Are they okey left alone at home?
AloneHome:Joi.string(),
//Friendly with people
FriendlyWithPeople:Joi.string(),
//Friendly with kids
FriendlyWithkids:Joi.string(),
//Friendly with other dogs
FriendlyWithOtherDogs:Joi.string(),
//Friendly with other cats
FriendlyWithOtherCats:Joi.string(),
//
//Currently under going Any medications
UnderGoing:Joi.string(),
Ongoing:Joi.string(),

//Name Of Medications
petname:Joi.string(),
pettype:Joi.string(),
OwnerName:Joi.string(),
ownerPhoneno:Joi.string(),

petname1:Joi.string(),
pettype1:Joi.string(),
OwnerName1:Joi.string(),
ownerPhoneno1:Joi.string(),

petname2:Joi.string(),
pettype2:Joi.string(),
OwnerName2:Joi.string(),
ownerPhoneno2:Joi.string(),

petname3:Joi.string(),
pettype3:Joi.string(),
OwnerName3:Joi.string(),
ownerPhoneno3:Joi.string(),

petname4:Joi.string(),
pettype4:Joi.string(),
OwnerName4:Joi.string(),
ownerPhoneno4:Joi.string(),

MedicationName:Joi.string(),
Timing:Joi.string(),
AfterFood:Joi.string(),

//Name OF Consulting doctors
DoctorName:Joi.string(),
ContactNo:Joi.string(),
//In Case of any emergencies Who do we Contacts
Emergencies:Joi.string(),
EmergencyPhone:Joi.string(),

Like:Joi.string(),
Dislike:Joi.string(),
Others:Joi.string(),

//Responds to Commands
PawName:Joi.string(),
Sit:Joi.string(),
come:Joi.string(),
walk:Joi.string(),
No:Joi.string(),
stay:Joi.string(),

// image:Joi.string(),
writehere:Joi.string(),
Condition:Joi.string(),

      
       };
       return Joi.validate(pets,schema);
   }


   module.exports.pet=pet;
   module.exports.validate=validatePet;