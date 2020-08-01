const passport = require('passport');
const { UniqueTokenStrategy } = require('passport-unique-token');
const Farmer = require('../models/Farmer')

var strategyOptions = {
    tokenQuery: 'token',
    tokenParams: 'token',
    tokenHeader: 'token',
};

passport.use(new UniqueTokenStrategy(strategyOptions,
    function (token, done) {
        Farmer.findOne({ $or: [{ local_access_token: token }, { google_access_token: token }] }, function (err, farmer) {
            if (err) {
                return done(err);
            }

            if (!farmer) {
                return done(null, false);
            }

            return done(null,farmer.toJSON());
        });
    }
))

module.exports = passport;