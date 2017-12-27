const snap7 = require('node-snap7')
// const getConfig = require('./getConfig')
const db = require('../models')
const io = require('socket.io')

const s7client = new snap7.S7Client() // create a new Instance

s7client.SetConnectionType(0x01) // sets connection as a PG

let config = {}
let data = Buffer.alloc(4)

let connect = false

if (connect) {
  connect(config)
}

exports = module.exports = function (io) {
  io.sockets.on('connection', function (socket) {
    // reading config from DB

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
    // Start plc connection
    socket.on('startPlc', function (config, data) {
      s7client.ConnectTo('192.168.1.170', 0, 1, function (err) {
        // s7client.ConnectTo(config.netAddr, config.rackNo, config.slotNo, function (err) {
        if (err) {
          return console.log(' >> Connection failed. Code #' + err + ' - ' + s7client.ErrorText(err))
        }
        // If no Error, writing functions for communication with Plc
        s7client.DBRead(1, 0, 2, function (error, result) {
          if (error) {
            return console.log(' >> Connection failed. Code #' + err + ' - ' + s7client.ErrorText(err))
          }
          console.log(result)
        })
        s7client.DBWrite(1, 0, 2, data, function (error, result) {
          if (error) {
            return console.log(' >> Connection failed. Code #' + err + ' - ' + s7client.ErrorText(err))
          }
          console.log(result)
        })
      })
    })
  })
}
/*
function connectToPlc (config) {
  s7client.ConnectTo('192.168.1.170', 0, 1, function (err) {
    // s7client.ConnectTo(config.netAddr, config.rackNo, config.slotNo, function (err) {
    if (err) {
      return console.log(' >> Connection failed. Code #' + err + ' - ' + s7client.ErrorText(err))
    }
    let testbuffer = new Buffer.alloc(2)
    // If no Error, writing functions for communication with Plc
    s7client.DBRead(1, 0, 2, function (error, result) {
      if (error) {
        return console.log(' >> Connection failed. Code #' + err + ' - ' + s7client.ErrorText(err))
      }
      console.log(result)
    })
    s7client.DBWrite(1, 0, 2, testbuffer, function (error, result) {
      if (error) {
        return console.log(' >> Connection failed. Code #' + err + ' - ' + s7client.ErrorText(err))
      }
      console.log(result)
    })
  })
}
 */
