const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    item:{
        type: String,
        required: true
    },

    quantity:{
        type: Number,
        required: true
    },

    totalAmount:{
        type: Number,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts', PostSchema);