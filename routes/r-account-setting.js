const {account,validate}=require('../models/m-account-setting');
const express=require('express');
 const router=express.Router();

router.get('/',async(req,res)=>{
    const train=await account.find().sort('name');
    res.send(train);
});//second parameter is call back function for  when we get request from http to the end point '/' and also call route handler.

router.post('/',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //if invalid 404-bad equest
    if(error) return res.status(400).send(error.details[0].message);
        //400 bad request
        let train=new account({name:req.body.name});
        train =await train.save();
        res.send(train);
});

router.put('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
    //400 bad request
    if(error)  return res.status(400).send(error.details[0].message);
        try{
            //look up the dog
            const train=await account.findByIdAndUpdate(req.params.id,{name:req.body.name},{
                new:true
            });
            res.send(train);//return updated dog 
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
        const train=await account.findByIdAndRemove(req.params.id);
        res.send(train);//return delete do
       }
       //if not exists return 404 error
    catch(ex){
        res.status(404).send("The given do id was not found");
        }
   });

   router.get('/:id',async(req,res)=>{
     try{
         ////look up the dog
        const train=await account.findById(req.params.id);
        res.send(train);
     }
     //if not exists return 404 error
     catch(ex){
        res.status(404).send("The given do id was not found");
     }
});

  
   module.exports=router;
