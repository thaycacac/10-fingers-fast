
const DBConfig = require('./database/config')
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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

// // user
// const signInRouter = require('./routes/user/signin')
// const signUpRouter = require('./routes/user/signup')

// app.use('/api/signin', signInRouter)
// app.use('/api/signup', signUpRouter)

// // lesson
// const getLesson = require('./routes/lesson/getLesson')
// const getListLesson = require('./routes/lesson/getListLesson')
// const getContentByID = require('./routes/lesson/getContentByID')

// app.use('/api/lesson', getLesson)
// app.use('/api/listlesson', getListLesson)
// app.use('/api/getcontent', getContentByID)
