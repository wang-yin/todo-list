const router = require('express').Router()
const todo = require('../controllers/task')

router.post('/create', todo.create )
router.put('/update/:id', todo.edit)
router.get('/update/:id', todo.findOne)

router
.route('/:id')
.delete(todo.del)
.put(todo.completed)



module.exports = router