require('./components/users/userController')
require('./components/users/user')
require('./components/lessons/lesson')
require('./components/listlessons/listlesson')
require('./components/emails/email')

const emailDAL = require('./components/emails/emailDAL')

// Export the server middleware
module.exports = {
  path: '/api/email',
  handler: emailDAL
}
