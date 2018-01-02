const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const config = require('../config/config')
const CommConf = require('./config')
const Output = require('./output')

mongoose.connect(config.dbAddress, {
  useMongoClient: true
})
  .catch(error => console.log(error))

module.exports = {
  CommConf: CommConf,
  Output: Output
}
