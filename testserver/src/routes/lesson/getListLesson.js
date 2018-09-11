const DBConfig = require('../../database/config')
const express = require('express')
const app = express()
const router = express.Router()
const sql = require('mssql')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

router.post('/', (req, res) => {
  const lessonID = req.body.lessonID

  sql.connect(DBConfig.dbconfig).then(pool => {
    return pool.request()
      .input('lessonID', sql.Int, lessonID)
      .query('SELECT c.ID AS \'ContentID\', t.ID AS \'TypeID\'FROM Lesson_Content lc INNER JOIN Content c  ON lc.ContentID = c.ID  INNER JOIN Type t ON c.Type = t.ID WHERE lc.LessonID = @lessonID')
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
