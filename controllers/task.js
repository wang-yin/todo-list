require('../models/schema')
const task = require('../models/schema')


const taskController = {
  create: async(req, res) => {
    const todo = new task({
      content: req.body.content
    })
    try {
      await todo.save()
      res.redirect('/')
    } catch (err) {
      res.redirect('/')
    }
  },
  del: (req, res) => {
    task.findOneAndDelete({_id: req.params.id})
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
  },
  completed: (req, res) => {
    task.findOneAndUpdate({_id: req.params.id}, {isCompleted: true})
    .then(result => res.json(result))
      .catch(err => res.json(err))
  },
  findOne: (req, res) => {
    task.findOne({_id: req.params.id})
    .then(result => res.render('edit', result))
    .catch(err => res.json(err))
  },
  edit: (req, res) => {
    const id = req.params.id
    const { content } = req.body
    return task.findById(id)
    .then(todo => {
      todo.content = content
      todo.isCompleted = false
      return todo.save()
    })
    .then(() => res.redirect('/'))
    .catch(err => res.json(err))
  }

}

module.exports = taskController