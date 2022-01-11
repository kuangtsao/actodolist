// express related variables
const express = require('express')
const app = express()
const port = 3000

// express-handlebars related variable
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

// 載入 todo model
const Todo = require('./models/todo')

// route
app.get('/',(req, res) => {
  Todo.find() // 取出 Todo model 裡的所有資料
    .lean() // 把 mongoose 的 Model 物件轉換成乾淨的 Javascript 資料陣列
    .then(todos => res.render('index', { todos })) // 將資料傳給 index 樣板
    .catch(error => console.error(error)) // 錯誤處理
})

app.listen(port, () => {
  console.log(`todo-list is running on http://localhost:${port}`)
})
