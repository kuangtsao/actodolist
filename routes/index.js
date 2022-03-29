// 引用 express 與 express 路由器
const express = require('express')
const router = express.Router()
// 登入狀態驗證
const { authenticator } = require('../middleware/auth')
// 引用路由器
const todos = require('./modules/todos')
router.use('/todos', authenticator, todos)

const user = require('./modules/user')
router.use('/user', user)

const home = require('./modules/home')
router.use('/', authenticator, home)

// 匯出路由器
module.exports = router
