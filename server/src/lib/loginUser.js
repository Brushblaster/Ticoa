const crypto = require('crypto')
const getUser = require('./getUser')

// Logs in a user
module.exports = function loginUser (socket, user) {
  // Create a token with crypto
  let token = crypto.randomBytes(64).toString('base64')

  // Save the user session
  global.userSessions[token] = user
  console.log('userSessoins: ' + global.userSessions)

  // Get the user belonging to the token and emit
  return getUser(socket, token)
}
