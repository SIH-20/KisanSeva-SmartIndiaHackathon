const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const AVATAR_PATH = path.join('/uploads/farmers/avatars');
const farmerSchema = new mongoose.Schema({

    email: {
        type: String,
    },
    phone:{
        type: String,
        unique: true,
        required:true
    },
    password: {
        type: String,
       // required: true,

    },
    name: {
        type: String,
      //  required: true,
    },
    address: {
        type: String,
      //  required: true,
    },
    district:{
        type:String,
       // required:true
    },
    avatar: {
        type: String
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Items'
        }
    ],
    google_access_token:{
        type:String,
    },
    local_access_token: {
        type: String,
    }
}, {
    timestamps: true
});
//for ensuring that password is not show in api request
farmerSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    delete obj.createdAt;
    delete obj.updatedAt;
    delete obj.__v;
    return obj;
}
let storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, path.join(__dirname, '..', AVATAR_PATH));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
farmerSchema.statics.uploadedAvatar = multer({ storage: storage }).single('avatar');
farmerSchema.statics.avatarPath = AVATAR_PATH;

const Users = mongoose.model('Farmers', farmerSchema);
module.exports = Users;