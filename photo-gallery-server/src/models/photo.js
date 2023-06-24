const mongoose = require("mongoose")

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: String,
        trim: true
    }
    ,
    photo: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    review: [
        {
            user:
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
                review: [
                    {
                        type: String,
                        required: true
                    }
                ]

            }

        }
    ]
}, {
    timestamps: true
})

const Photo = mongoose.model('Photo', photoSchema)
module.exports = Photo