const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const ListLesson = mongoose.model('ListLesson')

router.post('/createListLesson', (req, res) => {
  const listLesson = new ListLesson(req.body)
  listLesson.save()
    .then(() => {
      console.log('create listlesson success')
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
