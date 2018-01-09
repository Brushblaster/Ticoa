const path = require('path')
const db = require('../models')
const fs = require('fs')
const io = require('socket.io')

exports = module.exports = function (io) {
  io.sockets.on('connection', function (socket) {
    socket.on('saveConfig', function (config) {
      db.CommConf.create(config)
        .then(CommConf => console.log(CommConf))
        .catch(error => console.log('Model Error: ', error))
    })
    socket.on('getLastConfig', function () {
      db.CommConf
        .find({config: 1}).limit(1)
        .where('config').ne(null)
        .sort('-createdOn')
        .then(CommConf => {
          console.log(CommConf)
          io.sockets.emit('getLastConfig_res', (CommConf[0]))
        })
        .catch(error => console.log(error))
    })
  })
}
