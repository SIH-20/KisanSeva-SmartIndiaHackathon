const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    orderQuantity: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Quantity',
            required: true
        }
    ],
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        require: true,
    },
    amount: {
        type: Number
    },
    delivery: {
        type: Number
    },
    completed: {
        type: Boolean,
        default: false
    },
    transactionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction'
    }
}, {
    timestamps: true
});
const Orders = mongoose.model('Orders', OrderSchema);
module.exports = Orders;