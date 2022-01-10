// express related variables
const express = require('express')
const app = express()
const port = 3000

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
  res.send('Hello Express')
})

app.listen(port, () => {
  console.log(`todo-list is running on http://localhost:${port}`)
})
