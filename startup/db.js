const winston=require('winston');
const mongoose=require('mongoose');
module.exports=function(){
    //database connection
mongoose.connect('mongodb://localhost/pawclub')
.then(()=>winston.info("connected to mongodb"));
} 