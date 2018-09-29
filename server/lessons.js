require('./components/users/userController')
require('./components/users/user')
require('./components/lessons/lesson')
require('./components/listlessons/listlesson')
require('./components/emails/email')

const lessonDAL = require('./components/lessons/lessonDAL')

// Export the server middleware
module.exports = {
  path: '/api/lesson',
  handler: lessonDAL
}
