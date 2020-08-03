const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    State_Name: {
        type: String
    },
    District_name: {
        type: String
    },
    Crop_Year: {
        type: Number
    },
    Season: {
        type: String
    },
    Crop: {
        type: String
    },
    Area: {
        type: String
    },
    Production: {
        type: Number
    },
    Lattitude: {
        type: String
    },
    Longitude: {
        type: String
    }
});
const uttarkhand = mongoose.model('uttarkhand', dataSchema);
module.exports = uttarkhand;