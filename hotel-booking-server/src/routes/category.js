const express = require('express')
const router = express.Router()
const { getAllCategory, createCategory } = require('../controllers/category')

router.get('/getcategory',getAllCategory)
router.post('/createcategory',createCategory)

module.exports = router