require('./components/users/userController')
require('./components/users/user')
require('./components/lessons/lesson')
require('./components/listlessons/listlesson')
require('./components/emails/email')

const userDAL = require('./components/users/userDAL')

// Export the server middleware
module.exports = {
  path: '/api/user',
  handler: userDAL
}
