const mongoose = require('mongoose');
const FeedbackSchema = new mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Items',
        required:true
    },
    buyer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required:true
    },
    content:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
}, {
    timestamps: true
});
const Feedback = mongoose.model('Feedbacks', FeedbackSchema);
module.exports = Feedback;