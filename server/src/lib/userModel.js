// import { mongo } from 'mongoose'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
const db = mongoose.connect('mongodb://localhost/basicauthapp', {
  useMongoClient: true
})

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  password: { type: String, select: false },
  email: String
})

module.exports = db.model('User', userSchema)
