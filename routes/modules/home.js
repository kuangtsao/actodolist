// 引用 Express 與 express 路由器
const express = require('express')
const router = express.Router()
// 引用 Todo model
const Todo = require('../../models/todo')
// 定義首頁路由
router.get('/', (req, res) => {
  const userId = req.user._id
  Todo.find({ userId }) // 取出 Todo model 裡，與 user 這張 table 的 _id 有關的資料
    .lean() // 把 mongoose 的 Model 物件轉換成乾淨的 Javascript 資料陣列
    .sort({ _id: 'asc' }) // 根據 _id 做升冪
    .then(todos => res.render('index', { todos })) // 將資料傳給 index 樣板
    .catch(error => console.error(error)) // 錯誤處理
})

// 匯出路由模組
module.exports = router
