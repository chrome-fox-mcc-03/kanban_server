"use strict"

const router = require('express').Router()
const boardController = require('../controller/boardController')
const {checkBoard} = require('../middleware/authorization')

router.post('/', boardController.addBoard)
router.delete('/:id', checkBoard, boardController.deleteBoard)
router.get('/', boardController.showYourBoard)
router.get('/shared', boardController.showSharedBoard)


module.exports = router