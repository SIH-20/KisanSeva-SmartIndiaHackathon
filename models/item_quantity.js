const mongoose = require('mongoose');
const QuantSchema = new mongoose.Schema({
    item:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Items'
    },
    quantity: {
        type: Number
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cart'
    },
    price: {
        type: Number,
        required:true
    }
});
const Quantity = mongoose.model('Quantity', QuantSchema);
module.exports = Quantity;