const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const ListLesson = mongoose.model('ListLesson')

router.post('/', (req, res) => {
  const listLesson = new ListLesson(req.body)
  listLesson.save()
    .then(() => {
      console.log('create listlesson success')
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/', (req, res) => {
  ListLesson.find({})
    .select('lessonID lessonTitle lessonDescription')
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
