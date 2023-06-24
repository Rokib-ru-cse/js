const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
const shortid = require('shortid')


exports.signin = (req, res, next) => {
    User.findOne({ email: req.body.email }).exec(async (err, user) => {
        if (err) {
            return res.status("400").json({
                message: "user doesn't found",
            });
        }
        if (user) {
            const isAuthenticate = await user.authenticate(req.body.password)
            if (isAuthenticate && user.role === "admin") {
                const token = jwt.sign({ _id: user._id, role: user.role },
                    process.env.JWT_SECRET, { expiresIn: "2d" }
                );
                const { firstName, lastName, role, email, fullName } = user;
                res.cookie('token', token, { expiresIn: '2d' })
                return res.status(200).json({
                    token,
                    user: {
                        firstName,
                        lastName,
                        role,
                        email,
                        fullName,
                    },
                });
            } else {
                return res.status(400).json({
                    message: "password doesn't match",
                });
            }
        }
    });
};

exports.signup = (req, res, next) => {
    User.findOne({ email: req.body.email }).exec(async (err, user) => {
        if (user) {
            return res.status(400).json({
                message: "admin already registered",
            });
        }

        const { firstName, lastName, email, password } = req.body;

        const hash_password = await bcrypt.hash(password,10)

        const _user = new User({
            firstName,
            lastName,
            email,
            hash_password,
            role: "admin",
            username: shortid.generate(),
        });

        _user.save((error, data) => {
            if (error) {
                return res.status(400).json({
                    message: error,
                });
            }
            if (data) {
                return res.status(201).json({
                    user: "admin created successfully",
                });
            }
        });
    });
};

exports.signout = (req, res, next) => {
    res.clearCookie('token')
    res.status(200).json({
        message: "signout successfully"
    })
}