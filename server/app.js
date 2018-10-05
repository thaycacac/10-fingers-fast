const DBConfig = require('./configuration/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require('./components/users/userController')

app.listen(5000, () => {
  console.log(`Server started on port 5000`)
})

mongoose.Promise = global.Promise
mongoose.connect(DBConfig.dbconfig.nameDB, {
  useNewUrlParser: true
})
  .then(() => {
    console.log('Database connected')
  })

require('./components/users/user')
require('./components/lessons/lesson')
require('./components/listlessons/listlesson')
require('./components/emails/email')

const userDAL = require('./components/users/userDAL')
app.use('/api/user', userDAL)

const lessonDAL = require('./components/lessons/lessonDAL')
app.use('/api/lesson', lessonDAL)

const listlessonDAL = require('./components/listlessons/listlessonDAL')
app.use('/api/listLesson', listlessonDAL)

const emailDAL = require('./components/emails/emailDAL')
app.use('/api/email', emailDAL)
