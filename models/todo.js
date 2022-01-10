const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

// 透過 module.exports 把這個 schema 輸出
module.exports = mongoose.model('Todo', todoSchema)
