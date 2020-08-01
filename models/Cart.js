const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
    orderQuantity: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Quantity',
            required: true
        }
    ],
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    amount: {
        type: Number
    },
    delivery: {
        type: Number
    }
}, {
    timestamps: true
});
const Cart = mongoose.model('cart', CartSchema);
module.exports = Cart;