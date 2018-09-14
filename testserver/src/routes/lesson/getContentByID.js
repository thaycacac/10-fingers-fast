const DBConfig = require('../../database/config')
const express = require('express')
const app = express()
const router = express.Router()
const sql = require('mssql')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

router.post('/', (req, res) => {
  const contentID = req.body.contentID

  sql.connect(DBConfig.dbconfig).then(pool => {
    return pool.request()
      .input('contentID', sql.Int, contentID)
      .query('SELECT * FROM Content WHERE ID = @contentID')
  }).then(result => {
    res.send(result)
    sql.close()
  }).catch(err => {
    console.log(err)
    res.status(200).json({
      error: err
    })
    sql.close()
  })
})

module.exports = router
