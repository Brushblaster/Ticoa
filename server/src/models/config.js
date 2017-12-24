const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

/* const CommConfSchema = new Schema({
  netAddr: {
    type: String,
    required: 'IP Address is required'
  },
  rackNo: {
    type: String,
    required: 'Rack Number is required'
  },
  slotNo: {
    type: String,
    required: 'Slot Number is required'
  }
}) */

// Create Parameter Configuration Schema
const ConfigParSchema = new Schema({
  netAddr: {
    type: String,
    required: [true, 'IP Address is required']
  },
  slotNo: {
    type: Number,
    default: 2,
    required: [true, 'Slot Number is required']
  },
  rackNo: {
    type: Number,
    default: 1,
    required: [true, 'Rack Number is required']
  },
  _id: false
})

const CommConfSchema = new Schema({
  config: ConfigParSchema,
  createdOn: {
    type: Date,
    default: Date.now
  }
})

const CommConf = mongoose.model('CommConf', CommConfSchema)

module.exports = CommConf
