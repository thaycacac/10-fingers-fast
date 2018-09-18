const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Lesson = new Schema({
  lesson: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('Lesson', Lesson)
