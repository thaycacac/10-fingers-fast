const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')

// TODO: handel when duplicate username or email
router.post('/', (req, res) => {
  const user = new User(req.body)
  user.save()
    .then(() => {
      res.status(201).json({
        error: 'Register success'
      })
    })
    .catch(err => {
      console.log(err)
      res.status(200).json({
        error: 'Account already exists'
      })
    })
})

module.exports = router
