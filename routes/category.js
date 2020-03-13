const router = require('express').Router()
const category = require('../controllers/category')

router.use('/', category)

module.exports = router