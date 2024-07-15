const router = require('express').Router()
const todo = require('../controllers/task')

router.post('/create', todo.create )



module.exports = router