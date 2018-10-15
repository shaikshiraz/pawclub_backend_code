// var { user_data } = require('../user-data');
// var passport = require('passport'),
// FacebookTokenStrategy = require('passport-facebook-token');
// const {User,validate,}=require('../models/user');

// module.exports = function () {

//     passport.use(new FacebookTokenStrategy({
//         clientID: '2300056516897407',
//         clientSecret: '0b525582479ed92c8958d5a5734090bb'
//     },
//       async function (accessToken, refreshToken, profile, done) {
//             console.log(accessToken, refreshToken, profile);
//             const userExist=await User.findOne({"facebook.id":profile.id});
//             if(userExist){
//               return done(null,userExist);
//             }
//             const newUser=User({
//             method:'facebook',
//             facebook:{
//                 email:profile.emails[0].value,
//                 id:profile.id,
//                 displayName:profile.displayName,
//                 givenName:profile.name.givenName,
//                 familyName:profile.name.familyName
//                 // first_name:profile.first_name,
//                 // last_name:profile.last_name,
//              }
//             });
//             await newUser.save();
//             done(null,profile);
//         }));

// };