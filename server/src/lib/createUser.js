const md5 = require('md5')
const User = require('./userModel')
const loginUser = require('./loginUser')

// Creates a new User
module.exports = function createUser (socket, data) {
  // Hash the password
  data.password = md5(data.password)

  // Create a new user in MongoDB
  let user = new User(data)
  console.log('user successfully created !')
  // Save the MongoDB Model
  user.save().then(function (data) {
    return loginUser(socket, data)
  })
}
