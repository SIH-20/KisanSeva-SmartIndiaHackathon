const mongoose = require('mongoose');
const blacklistedSchema = new mongoose.Schema({
    farmer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Farmers",
        required:true
    },
    warnings:{
        type:Number,
        default:0
    },
    blacklisted:{
        type:Boolean,
        default:false
    },
    crop:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
const Blacklisted = mongoose.model('Blacklisted', blacklistedSchema);
module.exports = Blacklisted;