const mongoose = require("mongoose")

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: String,
        trim: true
    }
    ,
    image: {
        type: String,
        required: true
    },
    rent: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    book: {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        name: String,
        phone: String
    },
    facilities: {
        tea_and_coffee: {
            type: String
        },
        writing_desk: {
            type: String
        },
        refrigerator: {
            type: String
        },
        air_conditioning: {
            type: String
        },
        iron: {
            type: String
        },
        wifi: {
            type: String
        },
        room_size: {
            type: String
        },
        bed_type: {
            type: String
        },
        tv: {
            type: String
        },
        corridor: {
            type: String
        }
    }
    ,
}, {
    timestamps: true
})

const Room = mongoose.model('Room', roomSchema)
module.exports = Room