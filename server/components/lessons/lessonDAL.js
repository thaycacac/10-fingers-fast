const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Lesson = mongoose.model('Lesson')

router.post('/', (req, res) => {
  const lesson = new Lesson(req.body)
  lesson.save()
    .then(() => {
      console.log('create lesson success')
    })
    .catch(err => {
      console.log(err)
    })
})
router.get('/:lessonID', (req, res) => {
  const lessonID = req.params.lessonID
  Lesson.findById(lessonID)
    .exec()
    .then(result => {
      return result.lesson
    })
    .then((lessonID) => {
      Lesson.find({lesson: lessonID})
        .exec()
        .then(listLesson => {
          res.status(200).json({
            listLesson: listLesson
          })
        })
    })
    .catch((err) => {
      console.log(err)
    })
})
router.get('/listlesson/:lesson', (req, res) => {
  const lesson = req.params.lesson
  Lesson.find({ lesson: lesson })
    .select('lesson type')
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
