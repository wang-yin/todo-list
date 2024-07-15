const router = require('express').Router()
const Todo = require('../models/schema')

router.get('/', async(req, res) => {
  try {
    const todo = await Todo.find().lean()
    res.render('index', { todo })
  } catch(err) {
    console.log(err)
  }
})

module.exports = router