const cors=require('cors');//used for angular and nodejs server is run different port so.
const winston=require('winston');//library used for uncaught exception and unhandled exception 
const express=require('express');//which returns function we call that expressconst.This is module
const app=express();//object of express store it in to app
app.use(express.json());//middle ware
app.use(cors());
var passport = require('passport');
FacebookStrategy = require('passport-facebook').Strategy;
const google=require('passport-google-plus-token');

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


require('./startup/logging')();//logging logic
require('./startup/routes')(app);//routes logic
require('./startup/db')();//database connection logic
require('./startup/config')();//configuration logic
require('./startup/validation')();//validation logic

app.use('/uploads/homestay',express.static('uploads/homestay'));
app.use('/uploads/adoption',express.static('uploads/adoption'));
app.use('/uploads/dogwalking',express.static('uploads/dogwalking'));
app.use('/uploads/food',express.static('uploads/food'));
app.use('/uploads/found-pet',express.static('uploads/found-pet'));
app.use('/uploads/grooming',express.static('uploads/grooming'));
app.use('/uploads/homeproduct',express.static('uploads/homeproduct'));
app.use('/uploads/kennel',express.static('uploads/kennel'));
app.use('/uploads/lostpet',express.static('uploads/lostpet'));
app.use('/uploads/ngo',express.static('uploads/ngo'));
app.use('/uploads/petprofile',express.static('uploads/petprofile'));
app.use('/uploads/photo',express.static('uploads/photo'));
app.use('/uploads/swimming',express.static('uploads/swimming'));
app.use('/uploads/trainer',express.static('uploads/trainer'));
app.use('/uploads/transportation',express.static('uploads/transportation'));
app.use('/uploads/medications',express.static('uploads/medications'));

// //facebook authentication
//  const FACEBOOK_APP_ID='2283505448547245';
//  const FACEBOOK_APP_SECRET='bd97d997623bb8c553ef3dfe7a87e16a';

// const fboptions={
//     clientID: FACEBOOK_APP_ID,
//     clientSecret: FACEBOOK_APP_SECRET,
//     callbackURL: "http://localhost:3000/auth/facebook/callback",
//     profileFields:['email']
// };

// const fbcallback=  function(accessToken, refreshToken, profile, done) {
//    console.log("this is test",accessToken, refreshToken, profile);
//    done(null,profile);
//   }
//  passport.use(new FacebookStrategy(fboptions,fbcallback));

//         app.get('/auth/facebook', passport.authenticate('facebook',{ 
//             scope : ['public_profile', 'email']
//           }));


//         app.get('/auth/facebook/callback',
//          passport.authenticate('facebook',{successRedirect:'/api/ngo',failureRedirect: '/login'},
//          function(){
//              console.log("success");
//              //res.redirect('http://localhost:4200/')
//          }
//     )
//     )                                 
//facebook authentication
// var passportConfig = require('./token-validation/token');
// passportConfig();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.use(cors({
//   exposedHeaders: ['x-auth-token']
// }));

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));



// var createToken = function (auth) {
//   return jwt.sign({
//     id: auth.id
//   }, 'my-secret',
//     {
//       expiresIn: 60 * 120
//     });
// };

// var generateToken = function (req, res, next) {
//   console.log(' generate token');
//   req.token = createToken(req.auth);
//   next();
// };

// var sendToken = function (req, res) {
//   res.setHeader('x-auth-token', req.token);
//   console.log('req.auth => ', req.auth);
//   res.status(200).send(req.auth);
// };


// app.post('/auth/facebook', passport.authenticate('facebook-token', { session: false }), function (req, res, next) {
//   if (!req.user) {
//     return res.send(401, 'User Not Authenticated');
//   }
//   console.log(' ==========================  ', req.user);
//   // prepare token for API
//   req.auth = {
//     id: req.user.id
//   };

//   next();
// }, generateToken, sendToken);

// //token handling middleware
// var authenticate = expressJwt({
//   secret: 'my-secret',
//   requestProperty: 'auth',
//   getToken: function (req) {
//     if (req.headers['x-auth-token']) {
//       return req.headers['x-auth-token'];
//     }
//     return null;
//   }
// });



// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


//google authentication
// passport.use(new google({
// clientId:'533011607557-2lsbo139h7d1sgrfq9ml6dauj0p588da.apps.googleusercontent.com',
// clientSecret:'eF-nTRuIfpbBdC0fuvKD-QWq'
// },async(accessToken,refreshToken,profile,done)=>{
// console.log('accessToken',accessToken);
// console.log('refreshToken',refreshToken);
// console.log('profile',profile);
// }))







const port=process.env.PORT || 3000;//set environment variable to set alternate port automatically during production or deployement
app.listen(port,()=>winston.info(`listening on port ${port}`));//`` back tics for template string








//  const bodyParser  = require("body-parser")
//  const   passport    = require("passport")
//  const   cookieParser = require("cookie-parser")
//   const   LocalStrategy = require("passport-local")
//     const  flash        = require("connect-flash")
//      // Campground  = require("./models/campground"),
//     // Comment     = require("./models/comment"),
//    const  User        = require("./models/user")
//  const   session= require("express-session")

//  app.use(session({
//      name:'myname.sid',
//      secret:true,
//      resave:false,
//      saveUninitialized:false,
//      cookie:{
//          maxAge:360000000,
//          httpOnly:false,
//          secure:false

//       }
//   }));

// //  require('./routes/login');
// //  app.use(passport.session())
// //  app.use(passport.initialize())
// //     // seedDB      = require("./seeds"),
// //     // methodOverride = require("method-override");
    
// // // configure dotenv
// // // require('dotenv').load();

// // //requiring routes
// // // const commentRoutes    = require("./routes/comments");
// // // const campgroundRoutes = require("./routes/campgrounds")
//  const indexRoutes      = require("./routes/users")
    

// app.use(bodyParser.urlend({extended: true}));
// // // // app.set("view engine", "ejs");
// // // // app.use(express.static(__dirname + "/public"));
// // // // app.use(methodOverride('_method'));
// // // app.use(cookieParser('secret'));
// // //require moment
// // // app.locals.moment = require('moment');
// // // seedDB(); //seed the database

// // // PASSPORT CONFIGURATION
// // app.use(require("express-session")({
// //     secret: "Once again Rusty wins cutest dog!",
// //     resave: false,
// //     saveUninitialized: false
// // }));

// // app.use(flash());
// app.use(passport.initialize());
// // app.use(passport.session());
// // // passport.use(new LocalStrategy(User.authenticate()));
// // // passport.serializeUser(User.serializeUser());
// // // passport.deserializeUser(User.deserializeUser());

//  app.use(function(req, res, next){
//     res.locals.currentUser = req.user;
// //    res.locals.success = req.flash('success');
// //    res.locals.error = req.flash('error');
//    next();
// });

//  app.use("/api/users", indexRoutes);
// // // app.use("/campgrounds", campgroundRoutes);
// // // app.use("/campgrounds/:id/comments", commentRoutes);

