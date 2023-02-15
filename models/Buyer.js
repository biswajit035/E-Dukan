const mongoose = require('mongoose')
const {Schema} = mongoose

const BuyersSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('buyers',BuyersSchema);