const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/category')

router.get('/', CategoryController.find)

module.exports = router