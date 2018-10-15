const error=require('../middelware/error');
const express=require('express');

const homestay=require('../routes/r-homestay');
const homesearch=require('../routes/r-homestay');

const kennel=require('../routes/r-kennel');
const trans=require('../routes/r-transportation');
const food=require('../routes/r-food');
const dog=require('../routes/r-dog-walking');
const trainer=require('../routes/r-trainer');
const homeProducrs=require('../routes/r-home-products');
const grooming=require('../routes/r-grooming');
const ngo=require('../routes/r-ngo');
const wish=require('../routes/r-wishlist');
const lost=require('../routes/r-lost-pet');
const photos=require('../routes/r-photography');
const medications=require('../routes/r-medications');
const adoption=require('../routes/r-adoption');
const profile=require('../routes/r-profile');
const user=require('../routes/users');
const getuser=require('../routes/users');
const peruser=require('../routes/users');
const vender=require('../routes/venders');
const venderAuth=require('../routes/vender_auth');

const auth=require('../routes/auth');
const swim=require('../routes/r-swimming');
const account=require('../routes/r-account-setting');
const found=require('../routes/r-found-pet');
const petprofile=require('../routes/r-pet-profile');
const door=require('../routes/r-out-door');
//customer forgot and reset password
const forgots=require('../routes/forgotten');
const resets=require('../routes/forgotten');
const logouts=require('../routes/forgotten');
//venders forgot and reset password
const vender_forgots=require('../routes/vender_forgotten');
const vender_resets=require('../routes/vender_forgotten');

//add 2 cart
const home_stay_cart=require('../routes/cart/home-stay-cart')



module.exports=function(app){
    //api reference to the routes
    app.use(express.json());//middle ware
 app.use('/api/homestay',homestay);
 app.use('/api/homestaysearch',homesearch);
 app.use('/api/kennel',kennel);
 app.use('/api/transportation',trans);
 app.use('/api/food',food);
 app.use('/api/dog-walking',dog);
 app.use('/api/trainer',trainer);
 app.use('/api/home-products',homeProducrs);
 app.use('/api/grooming',grooming);
 app.use('/api/ngo',ngo);
 app.use('/api/wishlist',wish);
 app.use('/api/lost-pet',lost);
 app.use('/api/photo',photos);
 app.use('/api/medications',medications);
 app.use('/api/adoption',adoption);
 app.use('/api/profile',profile);
 app.use('/api/users',user);
 app.use('/api/users',user);

 app.use('/api/getuser',getuser);
 app.use('/api/venders',vender);
 app.use('/api/venders/auth',venderAuth);

  //customer authentication
 app.use('/api/auth',auth);

 app.use('/api/swimming',swim);
 app.use('/api/account',account);
 app.use('/api/found-pet',found);
 app.use('/api/petprofile',petprofile);
 app.use('/api/out-door',door);
 //customer forgot and reset password
 app.use('/api/forgot',forgots);
 app.use('/api/reset',resets);
 app.use('/api/logout',logouts);
 //venders forgot and reset password
 app.use('/api/vender/forgot',vender_forgots);
 app.use('/api/vender/reset',vender_resets);

//add 2 cart
app.use('/api/home_stay_cart',home_stay_cart);

 app.use(error);
 

}