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
}

module.exports = taskController