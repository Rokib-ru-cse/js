const Category = require('../models/category')


exports.getAllCategory = (req,res,next) => {
    try {
        Category.find()
            .exec((error, data) => {
                if (error) {
                    return res.status(400).json({ error })
                } if (data) {
                    return res.status(200).json({ data })
                } else {
                    return res.status(400).json({ error })
                }
            })
    } catch (error) {
        return res.status(400).json({ error })
    }
}
exports.createCategory = (req,res,next) => {
    try {
        const _data = new Category({ name: req.body.name })
        _data.save((error, data) => {
            if (error) {
                return res.status(400).json({ error })
            } if (data) {
                return res.status(200).json({ data })
            } else {
                return res.status(400).json({ error })
            }
        })
    } catch (error) {
        return res.status(400).json({ error })
    }
}