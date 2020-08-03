const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path')
const IMAGE_PATH = path.join('/uploads/items/');
const itemSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,

    },
    type:{
        type: String,
        enum: ['vegetable', 'fruit', 'grain']
    },
    category: {
        type: String,
        required: true,
        default: 'Vegetable'
    },
    description: {
        type: String,
    },
    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmers',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number
    },
    quality: {
        type: String,
        enum: ['Premium', 'Elite', 'Classic']
    },
    stock_quantity: {
        type: Number
    }
}, {
    timestamps: true
});
//for ensuring that password is not show in api request
itemSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}
let storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, path.join(__dirname, '..', IMAGE_PATH));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
itemSchema.statics.uploadedImage = multer({ storage: storage }).single('item-image');
itemSchema.statics.imagePath = IMAGE_PATH;

const Items = mongoose.model('Items', itemSchema);
module.exports = Items;