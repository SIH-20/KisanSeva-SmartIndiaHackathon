const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path')
const AVATAR_PATH = path.join('/uploads/users/avatars');
const userSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,

    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    avatar: {
        type: String
    },
    role: {
        type: String,
        required: true,
        default: 'buyer'
    },
    verified:{
        type:Boolean,
        default:false
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        }
    ]
}, {
    timestamps: true
});
//for ensuring that password is not show in api request

let storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, path.join(__dirname, '..', AVATAR_PATH));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
userSchema.statics.uploadedAvatar = multer({ storage: storage }).single('avatar');
userSchema.statics.avatarPath = AVATAR_PATH;

const Users = mongoose.model('Users', userSchema);
module.exports = Users;