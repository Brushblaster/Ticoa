const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const config = require('../config/config')
const UserSchema = require('./user')
const db = {}

mongoose.connect(config.dbadsress, {
  useMongoClien: true
})

const User = mongoose.model('User', UserSchema)

module.exports = db
