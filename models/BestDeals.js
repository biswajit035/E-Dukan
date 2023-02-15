const mongoose = require('mongoose');

const BestrDealSchema = new mongoose.Schema({
    photo: {
        type: String,
        default: ""
    },
    discount:{
        type: String,
    },
    price:{
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('BestDeal', BestrDealSchema);