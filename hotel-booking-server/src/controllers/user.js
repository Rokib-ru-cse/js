const User = require('../models/user')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


exports.getAllUser = (req, res, next) => {
    try {
        User.find()
            .exec((error, user) => {
                if (error) {
                    return res.status(400).json({
                        error: error
                    })
                }
                if (user) {
                    return res.status(200).json({
                        user
                    })
                } else {
                    return res.status(400).json({
                        error: 'something went wrong'
                    })
                }
            })
    }
    catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}


exports.userSignupController = (req, res, next) => {
    try {
        User.findOne({ email: req.body.email })
            .exec((error, user) => {
                if (error) {
                    return res.status(400).json({
                        error: error
                    })
                }
                if (user) {
                    return res.status(400).json({
                        message: "user already registered"
                    })
                } else {
                    const user = {
                        username: req.body.username,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10)
                    }
                    const _user = new User(user)
                    _user.save((error, data) => {
                        if (error) {
                            return res.status(400).json({
                                error: error
                            })
                        } if (data) {

                            const token = jwt.sign({ _id: data._id }, 'JWT_SECRET', { expiresIn: '1d' });
                            const user = {
                                username: data.username,
                                email: data.email,
                                _id: data._id
                            }
                            return res.status(201).json({
                                token,
                                user
                            })
                        }
                    })
                }
            })
    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}

exports.userLoginController = (req, res, next) => {
    try {

        const email = req.body.email
        User.findOne({ email: email })
            .exec((error, user) => {
                if (error) {
                    return res.status(400).json({
                        error: error
                    })
                }
                if (user) {
                    const auth = bcrypt.compareSync(req.body.password, user.password);
                    if (auth) {
                        const { username, email, _id } = user
                        var token = jwt.sign({ _id: user._id }, 'JWT_SECRET', { expiresIn: '1d' });
                        return res.status(200).json({
                            token,
                            user: { username, email, _id }
                        })
                    } else {
                        return res.status(400).json({
                            error: "wrong password"
                        })
                    }
                } else {
                    return res.status(400).json({
                        error: "user doesn't exist"
                    })
                }
            })
    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}