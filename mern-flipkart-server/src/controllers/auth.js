const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const shortid = require('shortid')


const generateJwtToken = (_id,role)=>{
    return jwt.sign({_id,role},process.env.JWT_SECRET,{
        expiresIn:"1d"
    })
}

module.exports.signin = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .exec(async (err, user) => {
            if (err) {
                return res.status('400').json({
                    message: "user doesn't found"
                })
            }
            if (user) {
                const isAuthenticate = await user.authenticate(req.body.password)
                if (isAuthenticate && user.role === "user") {
                    const token = generateJwtToken(user._id,user.role)
                    const { firstName, lastName, role, email, fullName } = user
                    return res.status(200).json({
                        token,
                        user: {
                            firstName,
                            lastName,
                            role,
                            email,
                            fullName
                        }
                    })
                } else {
                    return res.status(400).json({
                        message: "something went wrong"
                    })
                }
            }
        })

}

module.exports.signup = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .exec(async (err, user) => {
            if (user) {
                return res.status(400).json({
                    message: 'user already registered'
                })
            }

            const {
                firstName,
                lastName,
                email,
                password
            } = req.body
            const hash_password = await bcrypt.hash(password, 10)

            const _user = new User({
                firstName,
                lastName,
                email,
                hash_password,
                username: shortid.generate()
            })

            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: error
                    })
                }
                if (data) {
                    const token = generateJwtToken(user._id,user.role)
                    const {_id,firstName,lastName,email,role,fullName} = user
                    return res.status(201).json({
                        token,
                        user:{
                            _id,firstName,lastName,email,role,fullName
                        }
                    })
                }
            })



        })
}