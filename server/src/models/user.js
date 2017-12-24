const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
