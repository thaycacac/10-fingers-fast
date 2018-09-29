require('./components/users/userController')
require('./components/users/user')
require('./components/lessons/lesson')
require('./components/listlessons/listlesson')
require('./components/emails/email')

const listlessonDAL = require('./components/listlessons/listlessonDAL')

// Export the server middleware
module.exports = {
  path: '/api/listLesson',
  handler: listlessonDAL
}
