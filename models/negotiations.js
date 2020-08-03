const mongoose = require('mongoose');
const negoSchema = new mongoose.Schema({
    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmers'
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },

    status: {
        type: Boolean,
        default: false
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Items'
    },
    praposedPrice: {
        type: Number,
        required: true
    },
    code: {
        type: Number,
        required: true
    },
    quantity:{
        type:Number,
        required:true
    }
});
const Negotiations = mongoose.model('Negotiations', negoSchema);
module.exports = Negotiations;