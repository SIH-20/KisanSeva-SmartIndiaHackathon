const mongoose=require('mongoose');
const TransactionSchema=new mongoose.Schema({
    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Orders',
        required:true
    },
    paidAmount:{
        type:Number,
        required:true
    },
    sessionId:{
        type:String,
        required:true,
        unique:true
    },
    receiptNumber:{
        type:Number,
        require:true
    }
},{
    timestamps:true
});
const Transaction=mongoose.model('Transaction',TransactionSchema);
module.exports=Transaction;