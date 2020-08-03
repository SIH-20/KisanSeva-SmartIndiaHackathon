const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
// crypto for random passwards
const crypto = require('crypto');
const User = require('../models/User');


passport.use(new googleStrategy({
    clientID: "897366205304-u7kk2re2eoh6dnk37shu17tnkj296j70.apps.googleusercontent.com",
    clientSecret: "opyByiPrMkQo3k_lThYH49_V",
    callbackURL: "https://buyfreshdtu.xyz/users/auth/google/callback"

},
   async function (accessToken, refreshToken, profile,done) {
        console.log(arguments);
       
    // let {tokens}=await oauth2Client.getAccessToken('4/yQFx0bEZ1Yo00M5ccYs7sZJPU-SJxbPNfVACSqELjv_dUWbmDbuh5SZh_f-TPOTEwxI9q0yUEwjmcNTwVzEwelk');
  console.log(accessToken,refreshToken);
  
    User.findOne({ emailOrPhone: profile.emails[0].value }).exec(function (err, user) {
            if (err) { console.log("error in google-passport", err); return; }

            // console.log(profile);
            // console.log("user:-",user);
            if (user) {
                return done(null, user);
            } else {
                User.create({
                    first_name: (profile.displayName).split(" ",2)[0],
                    last_name: (profile.displayName).split(" ",2)[1],
                    address:"New Delhi",
                    role:"buyer",
                    phone:"999999999",
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                }, function (err, user) {
                    if (err) { console.log("error in creating user", err); return; }
                    return done(null, user);
                })
            }
        });
    }
))
module.exports = passport;