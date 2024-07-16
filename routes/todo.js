const router = require('express').Router()
const todo = require('../controllers/task')

router.post('/create', todo.create )

router
.route('/:id')
.delete(todo.del)
.put(todo.completed)



module.exports = router