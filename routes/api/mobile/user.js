const express = require('express');
const router = express.Router();
const userController = require('../../../controllers/api/mobile/user_controller');
const passport = require('passport')

router.post('/signUp/local', userController.localSignUp)
router.post('/signUp/google', userController.googleSignUp)
router.post('/authenticate/local', userController.localLogin)
router.get('/authenticate/google', userController.googleLogin)
router.get('/test', passport.authenticate('token',{session:false}), (req, res) => {
    return res.status(200).json({
        message: 'User Authenticated',
        user: req.user
    })
})
router.post('/otp',userController.otp);
router.post('/submitOtp',userController.submitotp);
module.exports = router;