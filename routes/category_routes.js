const router = require('express').Router()
const CategoryController = require('../controllers/CategoryController')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/', CategoryController.findAll)


module.exports = router