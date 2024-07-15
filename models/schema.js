const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
  id: {
    type: Number
  },
  content: {
    type: String,
    trim: true,
    required: true
  },
  isCompleted: {
    type: Boolean,
    trim: true,
    default: false,
    required: true
  },
  creatAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Todo', schema);