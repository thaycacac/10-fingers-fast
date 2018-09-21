const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ListLesson = new Schema({
  lessonID: {
    type: Number,
    require: true
  },
  lessonDescription: {
    type: String,
    require: true,
    trim: true
  }
})

module.exports = mongoose.model('ListLesson', ListLesson)
