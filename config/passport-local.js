const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const OTP = require('../models/Otp');
const Cart = require('../models/Cart')

passport.use(new localStrategy({

    usernameField: 'email',
    passReqToCallback:true
}, function (req,email, password, done) {
    let phone = undefined;

    if (Number.isNaN(parseInt(email))) {
        User.findOne({ email: email }, function (err, user) {
            if (err) {
                console.log('error in finding-->passport');
                return done(err);
            }
            if (!user || user.password != password) {
                return done(null, false);
            }
          
            return done(null, user);
        });
    } else {
        phone = email;
    
        User.findOne({ phone: phone }, function (err, user) {
            if (err) {
                console.log('error in finding-->passport');
                return done(err);
            }
         
            if (!user) {
                req.flash('error','NO Such User Present')
                return done(null, false);
            }
            
            function generateOTP() {

                
                var digits = '0123456789';
                let OTP = '';
                for (let i = 0; i < 4; i++) {
                    OTP += digits[Math.floor(Math.random() * 10)];
                }
                return OTP;
            }
            const otp = generateOTP();
            OTP.create({
                user: user._id,
                otp: otp
            }, function (obj, err) {
                if (err) {
                    console.log(err);
                }
                return done(null, user);
            })


        });
    }

}


));


passport.serializeUser(function (user, done) {
    return done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
    let user = await User.findById(id);
    return done(null, user);
});

//check if user is authenticated or not
passport.checkAuthentication = function (req, res, next) {

    if (req.isAuthenticated()) {
        return next();
    } else {
        if (req.xhr) {
            return res.status(404).json({
                message: 'Please Login'
            })
        } else {
            req.flash('error', 'Permission Denied!! Login In to Proceed');
            return res.redirect('/users/login');
        }
    }
};


//set the user for the views
passport.setAuthenticatedUser = async function (req, res, next) {
    if (req.isAuthenticated()) {
        res.locals.user = req.user;
        let cart = await Cart.findOne({buyer:req.user.id})
        if(cart){
            res.locals.cartSize = cart.orderQuantity.length
        }
    }
    return next();
};

module.exports = passport;