require('../../config/mongoose')
// 載入 todo-list
const Todo = require('../todo')

db.once('open', () => {
  console.log('insert seeds to mongo')
  for (let i = 0; i < 10 ; i++) {
    Todo.create({ name: `name-${i}` })
  }
  console.log('done')
})
