const User = require('../models/User');
const OTP = require('../models/Otp');
const verificationMail = require('../mailer/verifcation')
const jwt = require('jsonwebtoken')
const secret = 'ARMgidxUv7jzZYBUNNJbW843lpDuQGRc'

module.exports.register = (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/');
    }
    return res.render('register', {
        title: "register"
    });
}

module.exports.createUser = async (req, res) => {
    try {
        if (req.body.password != req.body.confirm_password) {
            req.flash('Password and Confirm Password do not match')
            return res.redirect('back');
        }

        let user = await User.findOne({
            email: req.body.email
        });

        if (!user) {
            let newuser = await User.create({
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                address: req.body.address,
            });
            jwt.sign({ id: newuser.id }, secret, {expiresIn:60*60},(err, token) => {
                if (err) {
                    console.log(err)
                    req.flash('Internal server Error')
                    return res.redirect('/ecommerce')
                }
                verificationMail.mail({token:token}, req.body.email)
                req.login(newuser, function (err) {
                    if (err) {
                        console.log(err);
                        return next(err);
                    }
                    req.flash('success', 'Verfication Mail Has been Sent')
                    return res.redirect('/users/login')
                });
            })

        } else {
            req.flash('User already exist')
            return res.redirect('back');
        }


    } catch (err) {
        console.log(err);
        return;
    }

}

module.exports.verify = (req, res) => {
    jwt.verify(req.params.jwt, secret, async function (err, decoded) {
        if (err) {
            req.flash('error', 'Your token has expired. Please send verification Mail again!');
            return res.redirect('/');
        }
        await User.findByIdAndUpdate(decoded.id, { 'verified': true })
        let newuser = await User.findById(decoded.id)
        req.login(newuser, function (err) {
            if (err) {
                console.log(err);
                return next(err);
            }
            req.flash('success', 'Verfication Mail Has been Sent')
            return res.redirect('/users/login')
        });
    });
}

module.exports.reverify = async (req, res) => {
    let user = await User.findById(req.user.id);
    jwt.sign({ id: user.id }, secret, { expiresIn: 60 * 60 }, (err, token) => {
        if (err) {
            console.log(err)
            req.flash('Internal server Error')
            return res.redirect('/ecommerce')
        }
        verificationMail.mail({ token: token }, user.email)
        req.flash('success', 'Verfication Mail Has been Sent')
        return res.redirect('back')
    })
}

module.exports.address = async (req, res) => {
    let user = await User.findById(req.user.id);
    user.address = req.body.address
    await user.save()
    req.flash('success', 'Address Added')
    return res.redirect('back')
}

module.exports.login = (req, res) => {

    if (req.isAuthenticated()) {

        return res.redirect('/ecommerce');
    }
    return res.render('login', { layout: "loginLayout" });
}

module.exports.submitOtp = async (req, res) => {
    try {
        let obj = await OTP.findOne({ user: req.user._id });


        let submittedOtp = `${req.body.first}${req.body.second}${req.body.third}${req.body.fourth}`;
        if (obj && obj.otp == submittedOtp) {
            return res.redirect('/');
        } else {
            return res.redirect('back');
        }
    } catch (error) {

    }

}

module.exports.loginWithOtp = (req, res) => {

    if (req.isAuthenticated()) {

        return res.redirect('/ecommerce');
    }
    return res.render('otp_login', { layout: "loginLayout" });
}

module.exports.create_session = (req, res) => {
    return res.redirect('/ecommerce');
}

module.exports.destroySession = async function (req, res) {
    await OTP.deleteMany({
        user: req.user._id
    });
    req.logout();
    return res.redirect('/ecommerce');
}