const mongoose = require('mongoose');
const OtpSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        require: true
    },
}, {
    timestamps: true
});
const OTP = mongoose.model('FarmerOTP', OtpSchema);
module.exports = OTP;