// express related variables
const express = require('express')
const app = express()
const port = 3000

// express related variable
const exphbs = require('express-handlebars')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// mongo related variable
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/todo-list')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

// route
app.get('/',(req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`todo-list is running on http://localhost:${port}`)
})
