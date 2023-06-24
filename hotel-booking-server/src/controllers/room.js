const Room = require('../models/room')

exports.createRoom = (req, res, next) => {
    try {
        let room = {
            name: req.body.name,
            image: req.file.filename,
            rent: req.body.rent,
            category: req.body.category,
            facilities: req.body.facilities
        }
        const _room = new Room(room)
        _room.save((error, data) => {
            if (error) {
                return res.status(400).json({ error })
            }
            if (data) {
                return res.status(201).json({ data })
            } else {
                return res.status(400).json({ error })
            }
        })
    } catch (error) {
        return res.status(400).json({ error })
    }
}

exports.getRoom = (req, res, next) => {
    try {
        Room.find()
            .exec((error, room) => {
                if (error) {
                    return res.status(400).json({ error })
                }
                if (room) {
                    return res.status(200).json({ room })
                } else {
                    return res.status(400).json({ error })
                }
            })
    } catch (error) {
        return res.status(400).json({ error })
    }
}
exports.bookRoom = (req, res, next) => {
    try {
        let data={}
        if (req.body.book) {
            data["book"] = req.body.book
        }
        if(req.body.facilities){
            data["facilities"] = req.body.facilities
        }
        Room.findOneAndUpdate({ _id: req.body._id }, data, { new: true })
            .exec((error, room) => {
                if (error) {
                    return res.status(400).json({ error })
                }
                if (room) {
                    return res.status(201).json({ room })
                } else {
                    return res.status(400).json({ error })
                }
            })
    } catch (error) {
        return res.status(400).json({ error })
    }
}