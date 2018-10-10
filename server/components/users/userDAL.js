const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')

// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// TODO: handel when duplicate username or email
router.post('/signup', (req, res) => {
  const user = new User(req.body)
  user.save()
    .then((result) => {
      res.redirect('/')
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
        req.session.user = user
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
  console.log(username)
  User.findOne({username: username})
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(200).json(err)
    })
})

router.post('/logout', (req, res) => {
  req.session.regenerate(error => {
    console.log(error)
  })
  res.redirect('/')
})

module.exports = router
