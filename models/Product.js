const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    name: String,
    company: String,
    groupName: String,
    date: Date,
    pos: Number,
    start: {
        type: Number,
        default: 0,
        max: 5,
        min: 0
    },
    price: Number,
    code: Number,
    image: String,
    description: String,
    groupId: String,
    sale: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('products', Product)