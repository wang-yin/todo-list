const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const home = require('./routes/home')
const todo = require('./routes/todo')
require('./config/mongoose')


if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const PORT = process.env.PORT

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/', home)
app.use('/api', todo)

app.listen(PORT, () => {
  console.log(`express server is running on http://localhost:${PORT}`)
})