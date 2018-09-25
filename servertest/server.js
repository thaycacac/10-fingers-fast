// import { config } from './database/config'
const express = require('express')

// Create express instnace
const app = express()
app.listen(4000)

// Require API routes
const users = require('./routes/users')

// Import API Routes
app.use(users)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
