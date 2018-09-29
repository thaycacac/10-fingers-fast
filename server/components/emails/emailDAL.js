const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Email = mongoose.model('Email')

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
  const email = new Email(req.body)
  email.save()
    .then(result => {
      console.log('create email success')
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
