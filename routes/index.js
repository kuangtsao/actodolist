// 引用 express 與 express 路由器
const express = require('express')
const router = express.Router()
// 引用路由器
const home = require('./modules/home')
router.use('/', home)

const todos = require('./modules/todos')
router.use('/todos', todos)

const user = require('./modules/user')
router.use('/user', user)

// 匯出路由器
module.exports = router
