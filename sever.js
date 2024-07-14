const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req,res) => {
  res.send('express app for todo')
})

app.listen(PORT, () => {
  console.log(`express server is running on http://localhost:${PORT}`)
})