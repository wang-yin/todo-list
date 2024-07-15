const mongoose = require('mongoose')

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connect(MONGODB_URI)

async function connectMongoDB () {
  try {
    await db
    console.log('Connected to MongoDB...')
  } catch (error) {
    console.log(error)
  }
}

return connectMongoDB()