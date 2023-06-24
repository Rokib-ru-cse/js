const {check,validationResult} = require('express-validator')


exports.signupValidation = [
    check('username')
    .notEmpty()
    .withMessage("username can not be empty"),
    check('email')
    .isEmail()
    .withMessage("enter valid email"),
    check('password')
    .isLength({ min: 6 })
    .withMessage("password must be 6 character long")
]

exports.signinValidation = [
    check('email')
    .isEmail()
    .withMessage("enter valid email"),
    check('password')
    .isLength({ min: 6 })
    .withMessage("password must be 6 character long")

]

exports.isAuthValidated = (req,res,next)=>{
    if(validationResult(req).array().length>0){
        return res.status(400).json({
            error:validationResult(req).array()[0].msg
        })
    } 
    next()
}