var express = require("express");
var router  = express.Router();
var passport = require("passport");
// var User = require("../models/user");
var async = require("async");
var nodemailer = require("nodemailer");
var crypto = require("crypto");
var mongoose = require("mongoose");
const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema(
    {        
        name: {type: String, unique: true},
        password: String,
        // confirm:String,
   // //      avatar: String,
   // //      firstName: String,
   // //      lastName: String,
         email: {type: String, unique: true, required: true},
         resetPasswordToken: String,
         resetPasswordExpires: Date,
         isAdmin: {type: Boolean, default: false} 
        
        });

             const User=mongoose.model('venders',userSchema);


router.post('/', function(req, res, next) {
    async.waterfall([
      function(done) {
        crypto.randomBytes(20, function(err, buf) {
          var token = buf.toString('hex');
          done(err, token);
        });
      },
      function(token, done) {
        User.findOne({ email: req.body.email }, function(err, user) {
          if (!user) {
            // req.flash('error', 'No account with that email address exists.');
          //   return res.redirect('/forgot');
          res.send("not an user");
          }
  
          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  
          user.save(function(err) {
            done(err, token, user);
          });
        });
      },
      function(token, user, done) {
        var smtpTransport = nodemailer.createTransport({
          service: 'Gmail', 
          secure:false,
          auth: {
            user: 'sachinbadnikai143@gmail.com',
            pass: 'Sachin143@'
          }
        });
        var mailOptions = {
          to: user.email,
          from: 'sachinbadnikai143@gmail.com',
          subject: 'Node.js Password Reset',
          text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            'http://localhost:4200/customer/resetpassword/' + token + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
        };
        smtpTransport.sendMail(mailOptions, function(err) {
          console.log('mail sent');
        // var data='Email is sent to your email';
        // storage = JSON.parse(data);
           res.send('An e-mail has been sent to ' + user.email + ' with further instructions.');
          // req.flash('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
          done(err, 'done');
        });
      }
    ], function(err) {
      if (err) return next(err);
      // res.redirect('/forgot');
      req.send("error in sending email");
    });
  });

router.get('/:token', function(req, res) {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
        res.send("not a valid token");
    //   req.flash('error', 'Password reset token is invalid or has expired.');
    //   return res.redirect('/forgot');
    }
    res.render('reset', {token: req.params.token});
  });
});

router.post('/:token', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user,next) {
        if (!user) {
        //   req.flash('error', 'Password reset token is invalid or has expired.');
        res.send("not an user");
        //   return res.redirect('back');
        }
        //  if(req.body.password === req.body.confirm) {
        //   user.setPassword(req.body.password, function(err) {
          var numSaltRounds = 10;
        const password=req.body.password;
bcrypt.hash(password, numSaltRounds, function(err, hash) {
   user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
//  res.send("successfully changed");
  user.password=hash;
  user.save();
    });

        //   user.password=req.body.password;
        //     user.resetPasswordToken = undefined;
        //     user.resetPasswordExpires = undefined;
        // //  res.send("successfully changed");
        //     user.save();
              // if(err){
              //   console.log('here');
              // }
              // else{
               
              //   req.logIn(user, function(err) {
              //     // done(err, user);
              //     // console.log("here 1");
              //   });
              // }
             
            // });
          // })
        // }
      
      });
    },
    function(user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', 
        secure:false,
        auth: {
          user: 'sachinbadnikai143@gmail.com',
          pass: 'Sachin143@'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'sachinbadnikai143@gmail.com',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        console.log('password changed');
        // req.flash('success', 'Success! Your password has been changed.');
        done(err);
      });
    }
  ], function(err) {
    // res.redirect('/campgrounds');
  });
});


router.get("/", function(req, res){
  req.logout();
  console.log("logout success");
  // req.flash("success", "See you later!");
   res.redirect("/login");
});



module.exports = router;