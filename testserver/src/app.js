const DBConfig = require('./database/config')
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

const userDAL = require('./components/users/userDAL')
app.use('/api/user', userDAL)

// // user
// const signInRouter = require('./routes/user/signin')

// app.use('/api/signin', signInRouter)

// // lesson
// const getLesson = require('./routes/lesson/getLesson')
// const getListLesson = require('./routes/lesson/getListLesson')
// const getContentByID = require('./routes/lesson/getContentByID')

// app.use('/api/lesson', getLesson)
// app.use('/api/listlesson', getListLesson)
// app.use('/api/getcontent', getContentByID)
