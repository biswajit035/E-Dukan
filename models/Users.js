const mongoose = require('mongoose')
const { Schema } = mongoose

const UersSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('users', UersSchema);