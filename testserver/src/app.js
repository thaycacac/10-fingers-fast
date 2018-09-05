const DBConfig = require('./database/config')
const express = require('express')
const app = express()
const sql = require('mssql')

app.listen(5000, () => {
  console.log(`Server started on port 5000`)
})

app.get('/api', (req, res) => {
  sql.connect(DBConfig.dbconfig, (error) => {
    if (error) {
      console.log(error)
    }
    const request = new sql.Request()

    request.query('select * from Authentication', (error, record) => {
      if (error) {
        console.log(error)
      }
      res.send(record)
      sql.close()
    })
  })
})

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
