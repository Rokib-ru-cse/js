const express = require('express')

const route = express.Router()
const { signin, signup, signout } = require('../../controllers/admin/auth')
const { requireSignin } = require('../../middleware')
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth')


route.post('/admin/signin', validateSigninRequest, isRequestValidated, signin)
route.post('/admin/signup', validateSignupRequest, isRequestValidated, signup)
route.post('/admin/signout',requireSignin, signout)


route.get('/p', requireSignin, (req, res) => {
    res.send('signin')
})



module.exports = route  