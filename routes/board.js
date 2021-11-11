const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/check_auth')
const board = require('../dbos/boardController')

// total get board
router.get('/', checkAuth, board.getAll)

// detail get board
router.get('/:boardId', checkAuth, board.get)

// register board
router.post('/', checkAuth, board.save)

// update board
router.patch('/:boardId', checkAuth, board.update)

// total delete board
router.delete('/', checkAuth, board.deleteAll)

// detail delete board
router.delete('/:boardId', checkAuth, board.delete)

module.exports = router