const passport =require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User=require('../models/User')
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'ARMgidxUv7jzZYBUNNJbW843lpDuQGRc',

}
passport.use(new JWTStrategy(opts,async function(payload,done){
try{
    console.log("payload",payload);
let user=await User.findById(payload._id);
console.log("user",user);
if(user){
    return done(null,user);
}else{
    return done(null,false);
}
}catch(err){
console.log("error in JWT");
return done(err);
}

}));
