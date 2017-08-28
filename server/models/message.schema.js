var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema
var messageSchema = new Schema({
    name: { type: String },
    message: { type: String }
},
    {
        collection: 'messenger'
    }
);

module.exports = mongoose.model('messenger', messageSchema);