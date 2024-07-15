const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const home = require('./routes/home')
require('./config/mongoose')


if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const PORT = process.env.PORT

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use('/', home)

app.listen(PORT, () => {
  console.log(`express server is running on http://localhost:${PORT}`)
})