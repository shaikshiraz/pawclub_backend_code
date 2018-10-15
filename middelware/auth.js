const config=require('config');
const jwt=require('jsonwebtoken');
function auth(req,res,next){

// if(!req.headers.authorization){
//   return res.status(401).send("un authorized request");
// }
// let token=req.headers.authorization.split('')[1]
// if(token==='null')
// {
//   return res.status(401).send("un authorized request");
// }
// let payload=jwt.verify(token,'jwtPrivateKey')
// if(!payload){
//   return res.status(401).send("un authorized request");
// }
// req.userId=payload.subject
// next()

   const token= req.header('Authorization');
   console.log(token);
   if(!token) res.status(401).send('no token provide');

   try{
     const decode= jwt.verify(token, 'jwtPrivateKey');
    //  console.log("token",token,"decode"+decode );
    req.user=decode;
     next();
   }
  catch(ex){
    res.status(401).send("invalid token");
  }
 
}
module.exports=auth;