const DBConfig = {
  user: 'sa',
  password: '123456',
  server: 'localhost',
  database: 'TypingDB',
  options: {
    encrypt: true,
    rowCollectionOnRequestCompletion: true
  }
}

module.exports = {
  dbconfig: DBConfig
}
