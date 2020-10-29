const mongoose = require("mongoose")


const pbSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
        unique: true,
        minlength: 6
    }
}, { collection: 'pb_collection'});

module.exports = mongoose.model('pb_collection', pbSchema)