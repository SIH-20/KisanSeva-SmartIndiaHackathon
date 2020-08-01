const mongoose = require('mongoose');
const RequestSchema = new mongoose.Schema({
    farmer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Farmers",
        required:true
    },
    content:{
        type:String,
        required:true
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
const Requests = mongoose.model('Request', RequestSchema);
module.exports = Requests;