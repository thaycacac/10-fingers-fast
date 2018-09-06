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
      .input('input_username', sql.NVarChar, user.username)
      .query('SELECT password FROM [User] WHERE username = @input_username')
  }).then(result => {
    // check password empty
    if (user.password === undefined || !user.password.trim()) {
      console.log('password undefined')
      res.status(200).json({
        error: 'You must be input user name and password'
      })
      sql.close()
    }
    // check user input correct
    if (result.recordset[0].password === user.password) {
      res.status(200).json({
        message: 'Login success'
      })
    } else {
      res.status(200).json({
        message: 'Login fail'
      })
    }
    sql.close()
  }).catch(err => {
    console.log(err)
    res.status(200).json({
      error: 'Account not registered'
    })
    sql.close()
  })
})

module.exports = router
