const Photo = require('../models/photo')
exports.getPhotos = (req, res, next) => {
    Photo.find()
        .exec((error, photo) => {

            if (error) {
                return res.status(400).json({
                    error: error
                })
            }
            if (photo) {
                return res.status(200).json({
                    photo: photo
                })
            } else {
                return res.status(400).json({
                    error: error
                })
            }
        })
}

exports.createPhoto = (req, res, next) => {
    try {
        const photo = {
            name: req.body.name,
            user: req.body.user, 
            photo: req.file.filename,
            category: req.body.category
        } 
        const _photo = new Photo(photo)
        _photo.save((error, photo) => {
            if (error) {
                return res.status(400).json({
                    error: error
                })
            } if (photo) {
                return res.status(201).json({
                    photo
                })
            } else {
                return res.status(400).json({
                    error: error
                })
            }
        })
    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }

}

function runUpdate(condition, updateData) {
    return new Promise((resolve, reject) => {
        //you update code here
        Photo.findOneAndUpdate(condition, updateData, { upsert: true })
            .then((result) => resolve())
            .catch((err) => reject(err));
    });
}
exports.updatePhoto = (req, res, next) => {
    const data = {}
    if (req.body.name) {
        data.name = req.body.name
    }
    Photo.findOne({ _id: req.body._id })
        .exec((error, photo) => {
            if (error) {
                return res.status(400).json({
                    'error': error
                })
            } if (photo) {
                const isreview = photo.review.find((user) => JSON.stringify(user.user.userId) === JSON.stringify(req.body.review.user.userId))
                if (isreview) {
                    if (req.body.review) {
                        let newReview = []
                        isreview.user.review.map(rev => newReview.push(rev))
                        newReview.push(req.body.review.user.review)
                        var data =

                        {
                            "$set":
                            {
                                "review.$.user": {
                                    review: newReview,
                                    userId: req.body.review.user.userId
                                }
                            }
                        }
                    }
                    var returnPromise = runUpdate({ _id: req.body._id, 'review.user.userId': isreview.user.userId }, data)
                } else {
                    if (req.body.review) {
                        var data =
                        {
                            $push:
                            {
                                review: {
                                    user: {
                                        userId: req.body.review.user.userId,
                                        review: [req.body.review.user.review]
                                    }
                                }
                            }
                        }
                    }
                    var returnPromise = runUpdate({ _id: req.body._id }, data)
                }
                returnPromise.then((response) => res.status(201).json({ response }))
                    .catch((error) => res.status(400).json({ error: error }));
            } else {
                return res.status(400).json({
                    error: error
                })
            }
        })
} 