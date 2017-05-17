const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create geolocation Schema
 const GeoSchema = new Schema({
     type: {
         type: String,
         default: "Point"
     },
     coordinates:{
         type: [Number],
         index: "2dsphere"     // the type of map we use
     }
 });

// create ninja Schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']  // instance will not be saved to db when name is missing
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    // add in geo location  -> geoJson
    geometry: GeoSchema
});

// model Ninja represents ninja collection
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;