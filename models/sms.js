const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    senderName: {
        type: String,
        required: true
    },
    senderNumber: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Sms = mongoose.model('Sms', messageSchema);
module.exports = Sms;


