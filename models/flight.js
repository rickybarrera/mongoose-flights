const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum:  ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    arrival: {
        type: Date
    } 
})

const flightSchema = mongoose.Schema ({
    airport:{ 
        type: String,
        enum:  ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
},
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
},
    flightNo: {
    type:  Number,
    min: 10,
    max: 9999,
    required: true
},
    departs: {
    type: Date
    },
    destinations: [destinationSchema]
    });


module.exports = mongoose.model('Flight', flightSchema);
