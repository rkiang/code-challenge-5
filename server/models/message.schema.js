var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema
var messageSchema = new Schema({
    name: { type: Text },
    message: { type: Text }
},
    {
        collection: 'messenger'
    }
);

module.exports = mongoose.model('rentals', rentalListingSchema);