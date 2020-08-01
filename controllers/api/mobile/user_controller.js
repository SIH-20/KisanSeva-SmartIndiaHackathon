const jwt = require('jsonwebtoken')
const secret = 'buYfreshDtU2020'
const Farmer = require('../../../models/Farmer')
const OTP = require('../../../models/farmerOtp');
const translator = require("../../../googleTranslation");


module.exports.localSignUp = async function (req, res) {
    try {
        check = await Farmer.findOne({ phone: req.body.phone });
        if (check) {
            return res.status(500).json({
                message: 'User already exist'
            })
        } else {
            let farmer = await Farmer.create({
                phone: req.body.phone,
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                address: req.body.address,
                district: req.body.district
            })
            jwt.sign({ id: farmer._id }, secret, { expiresIn: 60 * 60 * 24 }, async (err, token) => {
                farmer.local_access_token = token
                await farmer.save()
                return res.status(200).json({
                    message: 'User Sign Up Successfull',
                    access_token: token
                })
            })

        }
    } catch (err) {
        console.log(err)
        return res.status(404).json({
            message: 'Internal server Error'
        })
    }

}

module.exports.googleSignUp = async function (req, res) {
    try {
        check = await Farmer.findOne({ phone: req.body.phone });
        if (check) {
            check.google_access_token = req.body.token
            await check.save()
            return res.status(200).json({
                message: 'User Signed In',
                access_token: req.body.token
            })
        } else {
            farmer = await Farmer.create({
                phone: req.body.phone,
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                address: req.body.address,
                district: req.body.district,
                google_access_token: req.body.token
            })

            return res.status(200).json({
                message: 'User Sign Up Successfull',
                access_token: req.body.token
            })
        }
    } catch (err) {
        console.log(err)
        return res.status(404).json({
            message: 'Internal server Error'
        })
    }
}

module.exports.localLogin = async function (req, res) {
    try {
        farmer = await Farmer.findOne({ phone: req.body.phone });
        if (!farmer) {
            return res.status(400).json({
                message: 'No Such User Found'
            })
        }
        if (farmer.password != req.body.password) {
            return res.status(400).json({
                message: 'Worng Password'
            })
        }
        jwt.sign({ id: farmer._id }, secret, { expiresIn: 60 * 60 * 24 }, async (err, token) => {
            if (err) {
                console.log(err)
                return res.status(400).json({
                    message: 'Internal Server error'
                })
            }
            farmer.local_access_token = token
            await farmer.save()
            return res.status(200).json({
                message: 'User Signed In',
                access_token: token
            })
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            message: 'Internal Server error'
        })
    }
}

module.exports.googleLogin = async function (req, res) {
    try {
        farmer = await Farmer.findOne({ phone: req.query.phone });
        farmer.google_access_token = req.query.token
        await farmer.save()
        return res.status(200).json({
            message: 'User Signed In',
            access_token: token
        })

    } catch (err) {
        console.log(err)
        return res.status(400).json({
            message: 'Internal Server error'
        })
    }
}

module.exports.otp = async (req, res) => {
    try {
        let otp = Math.ceil(Math.random() * 10000)
        let new_otp = await OTP.create({
            phone: req.body.phone,
            otp: otp
        })
        let message = `Dear user , your OTP for login to buyfresh is ${otp}`;
        translator(message, req.body.phone);
        return res.status(200).json({
            message: 'OTP SENT'
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

module.exports.submitotp = async (req, res) => {
    try {
        let otp = await OTP.findOne({ otp: req.body.otp });
        let farmer = await Farmer.findOne({ phone: otp.phone });
        if (farmer) {
            jwt.sign({ id: farmer._id }, secret, { expiresIn: 60 * 60 * 24 }, async (err, token) => {
                if (err) {
                    console.log(err)
                    return res.status(400).json({
                        message: 'Internal Server error'
                    })
                }
                farmer.local_access_token = token
                await farmer.save()
                await OTP.deleteOne({ phone: otp.phone })
                return res.status(200).json({
                    message: 'User Signed In',
                    access_token: token
                })
            })
        } else {
            let farmer = await Farmer.create({
                phone: otp.phone,
            })
            jwt.sign({ id: farmer._id }, secret, { expiresIn: 60 * 60 * 24 }, async (err, token) => {
                farmer.local_access_token = token
                await farmer.save()
                await OTP.deleteOne({ phone: otp.phone })
                return res.status(200).json({
                    message: 'User Sign Up Successfull',
                    access_token: token
                })
            })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}