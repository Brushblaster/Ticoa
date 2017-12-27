const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

// Create Parameter Configuration Schema
const OutputSchema = new Schema({
  q00: {
    type: Boolean
  },
  q01: {
    type: Boolean
  },
  q02: {
    type: Boolean
  },
  q03: {
    type: Boolean
  },
  q04: {
    type: Boolean
  },
  q05: {
    type: Boolean
  },
  q06: {
    type: Boolean
  },
  q07: {
    type: Boolean
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
})

const Output = mongoose.model('Output', OutputSchema)

module.exports = Output
