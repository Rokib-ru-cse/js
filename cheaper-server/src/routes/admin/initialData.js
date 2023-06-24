const route = require('express').Router()
const {initialDataController} = require('../../controllers/admin/initialData')
const { requireSignin, adminMiddleware } = require('../../middleware')

route.post('/initialdata',requireSignin,adminMiddleware,initialDataController)


module.exports = route