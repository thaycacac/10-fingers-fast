const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')

// TODO: handel when duplicate username or email
router.post('/signup', (req, res) => {
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

router.post('/signin', (req, res) => {
  let user = req.body
  User.findOne({username: user.username})
    .then(result => {
      if (result.password === user.password) {
        res.status(200).json({
          mesage: 'Login success',
          error: ''
        })
      } else {
        res.status(200).json({
          mesage: '',
          error: 'Wrong Password'
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(200).json({
        message: '',
        error: 'Account not registered'
      })
    })
})

router.post('/getProfile', (req, res) => {
  let username = req.body.username
  User.findOne({username: username})
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(200).json(err)
    })
})

module.exports = router
