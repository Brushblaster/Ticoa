const path = require('path')
const db = require('../models')
const fs = require('fs')
const io = require('socket.io')

exports = module.exports = function (io) {
  io.sockets.on('connection', function (socket) {
    socket.on('readConfig', function (config) {
      let addr = db.CommConf.findOne({}, { config: true, _id: false }, { sort: { createdOn: -1 } },
        (err, result) => {
          if (err) {
            console.log('Error: ', err)
          }
          if (result) {
            console.log(result)
            config.netAddr = result.config.netAddr
            config.slotNo = result.config.slotNo
            config.rackNo = result.config.rackNo
          }
        })
    })
  })
}

/* function buildConfig (config) {
  let addr = db.CommConf.findOne({}, {config: true, _id: false}, {sort: {createdOn: -1}},
    (err, result) => {
      if (err) {
        console.log('Error: ', err)
      }
      if (result) {
        console.log(result)
        config.netAddr = result.config.netAddr
        config.slotNo = result.config.slotNo
        config.rackNo = result.config.rackNo
      }
    }).then(() => {
  })
  return config
} */

/* function slotNo () {
  db.CommConf.findOne({})
    .sort({ createdOn: -1 })
    .exec(function (error, results) {
      if (error) {
        console.log(error)
      } else {
        console.log(`'${results.config.slotNo}'`)
        return `${results.config.slotNo}`
      }
    })
}

function rackNo () {
  db.CommConf.findOne({})
    .sort({ createdOn: -1 })
    .exec(function (error, results) {
      if (error) {
        console.log(error)
      } else {
        console.log(`'${results.config.rackNo}'`)
        return `${results.config.rackNo}`
      }
    })
} */
