const mongoose = require('mongoose');
const ComplaintSchema = new mongoose.Schema({
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required:true
    },
    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmers',
        required:true
    },
    crop: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
}, {
    timestamps: true
});
const Complaints = mongoose.model('Complaints', ComplaintSchema);
module.exports = Complaints;