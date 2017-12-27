const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

// Create Parameter Configuration Schema
const ConfigParSchema = new Schema({
  netAddr: {
    type: String,
    required: [true, 'IP Address is required']
  },
  slotNo: {
    type: Number,
    default: 1,
    required: [true, 'Slot Number is required']
  },
  rackNo: {
    type: Number,
    default: 0,
    required: [true, 'Rack Number is required']
  },
  networkType: {
    type: String,
    default: 'Ethernet',
    required: [true, 'Network Type must be set']
  },
  protocolType: {
    type: String,
    default: 'IPv4',
    required: [true, 'Network Protocol must be supplied']
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
