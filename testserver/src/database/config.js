const DBConfig = {
  user: 'sa',
  password: '123456',
  server: 'localhost',
  database: 'PRJ321',
  options: {
    encrypt: true,
    rowCollectionOnRequestCompletion: true
  }
}

module.exports = {
  dbconfig: DBConfig
}
