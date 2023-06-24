const express = require('express')
const router = express.Router()
const {userSignupController,userLoginController,getAllUser} = require('../controllers/user')

router.post('/signup',userSignupController)
router.post('/login',userLoginController)
router.get('/alluser',getAllUser)

module.exports = router