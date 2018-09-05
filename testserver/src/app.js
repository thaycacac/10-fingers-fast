const DBConfig = require('./database/config')
const express = require('express')
const app = express()
const sql = require('mssql')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(5000, () => {
  console.log(`Server started on port 5000`)
})

app.post('/api', (req, res) => {
  const user = req.body

  sql.connect(DBConfig.dbconfig).then(pool => {
    // Query
    return pool.request()
      .input('input_parameter', sql.NVarChar, user.username)
      .query('select password from authentication where username = @input_parameter')
  }).then(result => {
    console.log(result.recordset[0].password)
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
    res.status(500).jsonp({ 
      error: err
    })
    sql.close()
  })
})
