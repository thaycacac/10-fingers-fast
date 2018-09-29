const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const ListLesson = mongoose.model('ListLesson')

// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

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
