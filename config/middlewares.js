const User = require('../models/User')
module.exports.verified = async (req, res, done) => {
    if (req.user.verified) {
        done()
    } else {
        req.flash('error', 'Please Verify Your Email To Proceed For Payment')
        return res.redirect('back');
    }
}

module.exports.address = async (req, res, done) => {
    if (req.user.address) {
        done()
    } else {
        req.flash('error', 'Please Enter Your Address To Proceed For Checkout')
        return res.redirect('back');
    }
}