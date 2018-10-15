const {home_stay_cart}=require('../../models/cart/m-homestay-cart');
const express=require('express');
 const router=express.Router();




router.get('/',async(req,res)=>{
    const homestay=await home_stay_cart.find().sort('_id');
    res.send(homestay);
    // console.log(homestay);
});//second parameter is call back function for  when we get request from http to the end point '/' and also call route handler.
//u


router.post('/',async(req,res)=>{    
        let t=new home_stay_cart({ 
      //personal details 
      name:req.body.name,
        });
       t =await t.save();
        res.send(t);
});

router.put('/:id',async(req,res)=>{
    const {error}=validate(req.body);//object destructuring
        //400 bad request
        if(error)  return res.status(400).send(error.details[0].message);     
    try{
        //look up the home
        const t=await home_stay_cart.findByIdAndUpdate(req.params.id,{image:req.file.path},{
            new:true
        });
         //return updated home
        res.send(t);
    }
    //if not exists return 404 error
    catch(ex){
          res.status(404).send('given id is not found');
    }
});

   router.delete('/:id',async(req,res)=>{
        //look up the home
        try{
            const t=await home_stay_cart.findByIdAndRemove(req.params.id);
            res.send(t);
        }
         //if not exists return 404 error
        catch(ex){
            res.status(404).send('given id was not found');
             } 
   });

   router.get('/:id',async(req,res)=>{
       //look up the home
       try{
        const t=await home_stay_cart.findById(req.params.id);
        res.send(t);
        console.log(t);
       }
        //if not exists return 404 error
       catch(ex){
        res.status(404).send('given id was not found');
       }
    console.log(req.params.id);
});

  
   module.exports=router;
