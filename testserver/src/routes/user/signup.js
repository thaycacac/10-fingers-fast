const DBConfig = require('../../database/config')
const express = require('express')
const app = express()
const router = express.Router()
const sql = require('mssql')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

router.post('/', (req, res) => {
  const user = req.body

  sql.connect(DBConfig.dbconfig).then(pool => {
    return pool.request()
      .input('username', sql.VarChar(50), user.username)
      .input('firstname', sql.NVarChar, user.firstname)
      .input('lastname', sql.NVarChar, user.lastname)
      .input('dob', sql.NVarChar, user.dob)
      .input('email', sql.NVarChar, user.email)
      .input('password', sql.NVarChar, user.password)
      .query('INSERT INTO [User] (username, firstname, lastname, dob, email, password) VALUES (@username, @firstname, @lastname, @dob, @email, @password)')
  }).then(result => {
    res.status(200).json({
      error: 'Register success'
    })
    sql.close()
  }).catch(err => {
    console.log(err)
    res.status(200).json({
      error: 'Username already exist'
    })
    sql.close()
  })
})

module.exports = router
