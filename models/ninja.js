const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']  // instance will not be saved to db when name is empty
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
    // add in geo location
});

// model Ninja represents ninja collection
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;