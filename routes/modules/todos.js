const express = require('express')
const router = express.Router()
const Todo = require('../../models/todo')

router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const name = req.body.name // 從 req.body 拿出表單裡的 name 資料
  return Todo.create({ name }) // 存入資料庫
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findById(id)
    .lean()
    .then((todo) => res.render('detail', { todo }))
    .catch(error => console.error(error))
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Todo.findById(id)
    .lean()
    .then((todo) => res.render('edit', { todo }))
    .catch(error => console.error(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, isDone } = req.body
  return Todo.findById(id)
    .then(todo => {
      todo.name = name
      todo.isDone = isDone === 'on'
      // 相等於
      /* 要注意 checkbox 打勾起來 -> on
        if (isDone === 'on') {
          todo.isDone = true
        } else {
          todo.isDone = false
        }
      */
      return todo.save() // 非同步的事情盡量用 return
    })
    .then(() => res.redirect(`/todos/${id}`))
    .catch(error => console.error(error))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findById(id)
    .then(todo => todo.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
