var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    data: {
        type: mongoose.SchemaTypes.Mixed,
        required: true
    }
});

var Block = mongoose.model('Block', schema);

module.exports = Block;