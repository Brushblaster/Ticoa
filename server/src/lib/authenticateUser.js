const md5 = require('md5')
const User = require('./userModel')
const loginUser = require('./loginUser')

// Authenticates a user and logs them in
module.exports = function authenticateUser (socket, data) {
  // Hash the password
  data.password = md5(data.password)
  console.log('search for user')
  User.findOne(data, null, function (err, data) {
    // if the username and password are correct, log the user in
    if (data) {
      return loginUser(socket, data) && console.log('user successfully found!')

      // If the username and password are incorrect, emit an Error
    } else {
      return socket.emit('userLoginError', err || {
        message: 'Invalid email or password'
      }) && console.log('user not found !')
    }
  })
}
