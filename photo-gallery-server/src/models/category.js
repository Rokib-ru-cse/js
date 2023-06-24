const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        trim: true
    }
}, {
    timestamps: true
})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category