 var mongoose = require("mongoose");
  var passportLocalMongoose = require("passport-local-mongoose");

 const bcrypt=require('bcrypt');

  var UserSchema = new mongoose.Schema({
     name: {type: String, unique: true},
     password: String,
     confirm:String,
// //      avatar: String,
// //      firstName: String,
// //      lastName: String,
      email: {type: String, unique: true, required: true},
      resetPasswordToken: String,
      resetPasswordExpires: Date,
      isAdmin: {type: Boolean, default: false}
 });
  UserSchema.plugin(passportLocalMongoose);
  UserSchema.methods.isvalid=function(hashedpassword){
       return bcrypt.compareSync(hashedpassword,this.password);
 }
 UserSchema.methods.generateAuthToken=function(){
     const token=jwt.sign({_id:this._id,isAdmin:this.isAdmin},'jwtPrivateKey');
     return token;
 }
  module.exports.UserSchema=UserSchema;

 module.exports = mongoose.model("Use", UserSchema);