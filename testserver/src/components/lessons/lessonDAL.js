const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Lesson = mongoose.model('Lesson')

router.post('/createLesson', (req, res) => {
  const lesson = new Lesson(req.body)
  lesson.save()
    .then(() => {
      console.log('create lesson success')
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
