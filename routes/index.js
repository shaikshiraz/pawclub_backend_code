var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/users");
const bcrypt=require('bcrypt');
// var Campground = require("../models/campground");
var async = require("async");
var nodemailer = require("nodemailer");
var crypto = require("crypto");
// var User=require('../models/users');
// const mongoose=require('mongoose');

// //root route
// router.get("/", function(req, res){
//     res.render("landing");
// });

// // show register form
// router.get("/register",async function(req, res){
//     const n=await UserSchema.find().sort('username');
//      res.send(n);
//     res.send("get all informatin");
// //    res.render("register", {page: 'register'}); 
// });

// handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({
        username: req.body.username,
        // firstName: req.body.firstName,
        // lastName: req.body.lastName,
        email: req.body.email,
        //  avatar: req.body.avatar
      });

    if(req.body.adminCode === 'secretcode123') {
      newUser.isAdmin = true;
    }

    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register", {error: err.message});
        }
        passport.authenticate("local")(req, res, function(){
           req.flash("success", "Successfully Signed Up! Nice to meet you " + req.body.username);
           res.send("username is registerd");
           const token=user.generateAuthToken();
//  const token=jwt.sign({_id:user._id},'jwtPrivateKey');
        res.header('x-auth-token',token).send(_.pick(user,['name','email']));
//     res.header('Authorization',token).send({token});;
//     //  res.status(200).send({token});
        });
    });
});

//show login form
// router.get("/login", function(req, res){
//    res.render("login", {page: 'login'}); 
// });

// handling login logic
router.post("/login", function(req, res){
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.status(501).json(err); }
    if (!user) { return res.status(501).json(info); }
    req.logIn(user, function(err) {
      if (err) { return res.status(501).json(err); }
      return res.status(200).json({message:'login success'});
    });
  })(req, res, next);
});

// passport.authenticate("local"), 
//     {
//         // successRedirect: "/campgrounds",
//         // failureRedirect: "/login",
//         // failureFlash: true,
//         // successFlash: 'Welcome to YelpCamp!'
//     }), function(req, res){
// };

// logout route
router.get("/logout", function(req, res){
   req.logout();
   req.send("logout successfully");
   req.flash("success", "See you later!");
   res.redirect("/login");
});

// forgot password
// router.get('/forgot', function(req, res) {
//   res.render('forgot');
// });

router.post('/forgot', function(req, res, next) {
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
          req.flash('error', 'No account with that email address exists.');
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
          'http://' + req.headers.host + '/api/index/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        console.log('mail sent');
        res.send("Email is sent to your email");
        req.flash('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    // res.redirect('/forgot');
    req.send("error in sending email");
  });
});

// router.get('/reset/', function(req, res) {
//    User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
//     if (!user) {
//       req.flash('error', 'Password reset token is invalid or has expired.');
//       req.send("user is invalid");
//       // return res.redirect('/forgot');
//     }
//     res.render('reset', {token: req.params.token});
//   });
//  });

router.post('/reset/:token', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          req.flash('error', 'Password reset token is invalid or has expired.');
          // return res.redirect('back');
        }
        if(req.body.password === req.body.confirm) {
          user.setPassword(req.body.password, function(err) {
            
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
            user.save();
            res.send("password is changed");
            // user.save(function(err) {
            //   req.logIn(user, function(err) {
            //     done(err, user);
            //   //  res.send("changed password in saved");
            //   });
            // });
          });
        } else {
            req.flash("error", "Passwords do not match.");
            res.send('your password dont match');
            // return res.redirect('back');
        }
      });
    },
    // function(user, done) {
    //    var smtpTransport = nodemailer.createTransport({
    //      service: 'Gmail',
    //      secure:false, 
    //     auth: {
    //      user: 'sachinbadnikai143@gmail.com',
    //       pass: 'Sachin143@'
    //     }
    //   });
    //   var mailOptions = {
    //     to: user.email,
    //     from: 'sachinbadnikai143@gmail.com',
    //     subject: 'Your password has been changed',
    //     text: 'Hello,\n\n' +
    //       'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
    //   };
    //   smtpTransport.sendMail(mailOptions, function(err) {
    //      req.flash('success', 'Success! Your password has been changed.');
    //      res.send("mail is sent");
    //     done(err);
    //    });
    //  }
  ], function(err) {
    res.send("error");
    //  res.redirect('/campgrounds');
  });
});

// USER PROFILE
// router.get("/users/:id", function(req, res) {
//   User.findById(req.params.id, function(err, foundUser) {
//     if(err) {
//       req.flash("error", "Something went wrong.");
//       res.redirect("/");
//     }
//     Campground.find().where('author.id').equals(foundUser._id).exec(function(err, campgrounds) {
//       if(err) {
//         req.flash("error", "Something went wrong.");
//         res.redirect("/");
//       }
//       res.render("users/show", {user: foundUser, campgrounds: campgrounds});
//     })
//   });
// });


module.exports = router;