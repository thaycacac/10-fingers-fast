
const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(5000, () => {
  console.log(`Server started on port 5000`)
})

// routes
const signInRouter = require('./routes/user/signin')

app.use('/api/signin', signInRouter)
