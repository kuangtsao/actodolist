// express related variables
const express = require('express')
const app = express()
const port = 3000

// express-handlebars related variable
const exphbs = require('express-handlebars')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// body parser
const bodyParser = require('body-parser')
// 用 app.use 規定每一筆請求都需要通過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

// 載入 method override
const methodOverride = require('method-override')
// 設定每一筆請求都會透過 method-override 處理
app.use(methodOverride('_method'))

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

// 引用路由器
const routes = require('./routes')
// 將 request 導入路由器
app.use(routes)

app.listen(port, () => {
  console.log(`todo-list is running on http://localhost:${port}`)
})
