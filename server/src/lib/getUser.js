// Get a user who matches the token

module.exports = function getUser (socket, token) {
  // Emit an error if the token dosen't exist
  if (!global.userSessions[token]) {
    return socket.emit('userGetError', {
      message: 'This user is not authenticated'
    })
  }
  console.log('token: ' + token)
  // Emit a massage with the profile and token
  // if the token does exist
  return socket.emit('userGetSuccess', {
    profile: global.userSessions[token],
    token: token
  })
}
