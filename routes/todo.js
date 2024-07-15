const router = require('express').Router()
const todo = require('../controllers/task')

router.post('/create', todo.create )

router.delete('/:id', todo.del)



module.exports = router