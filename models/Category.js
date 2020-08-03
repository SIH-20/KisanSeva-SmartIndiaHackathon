const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique:true,
        required:true
    },
    items:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Items',
        required:true
    }]
}, {
    timestamps: true
});
const Category = mongoose.model('Categories', CategorySchema);
module.exports = Category;