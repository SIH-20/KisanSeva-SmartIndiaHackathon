const express=require('express');
const passport=require('passport');
const router=express.Router();
const otpMware=require('../assets/middleware/otp')
const usersController=require('../controllers/user_controller');
router.get('/register',usersController.register);
router.get('/login',usersController.login);
router.post('/create-user',usersController.createUser);
router.get('/logout',usersController.destroySession);
router.post('/create-session', passport.authenticate('local', 
{ failureRedirect: '/users/login',
failureFlash: "Invalid username or password!",
successFlash: "Logged you in!" }), usersController.create_session);
router.get('/auth/google',passport.authenticate('google',{scope :['profile','email']}));
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'./signin'}),usersController.create_session);
router.get('/verify/:jwt',usersController.verify)
router.get('/reverify',usersController.reverify)
router.post('/address',usersController.address)
//otp routes

router.post('/login/submit-otp',usersController.submitOtp);
router.get('/login/verify-otp',passport.checkAuthentication,otpMware.sendOtp,(req,res)=>{
    // console.log('hey',req.user);
    return res.render('enter_otp',{layout:"loginLayout"});
});
router.get('/login/login-with-otp',usersController.loginWithOtp);
router.post('/submit-number',passport.authenticate('local', 
{ failureRedirect: '/',
failureFlash: "Please Enter Valid Number",
successRedirect:'/users/login/verify-otp'}));

module.exports=router;