const mongoose = require('mongoose')

const boxSchema = new mongoose.Schema({
    style: {
        type: String, 
        enum: ['wood', 'plastic', 'bag'],
        required: true
    },
    condition: {
        type: String,
        enum: ['new', 'used'],
        default: 'new'
    }
}, 
{
    timestamps: true
})

module.exports = boxSchema