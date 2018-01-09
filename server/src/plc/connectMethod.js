const snap7 = require('node-snap7')
const getConfig = require('./getConfig')
const db = require('../models')
const io = require('socket.io')
const bitBuffer = require('bit-buffer')
const BitArray = require('node-bitarray')

const s7client = new snap7.S7Client() // create a new Instance

s7client.SetConnectionType(0x01) // sets connection as a PG

let connectionParams = {
  address: '',
  rack: '0',
  slot: '1',
  type: 0x01,
  connected: false,
  tsap: false,
  localTSAP: ['02', '00'],
  remoteTSAP: ['02', '00']
}

var config = {}

exports = module.exports = function (io) {
  io.sockets.on('connection', function (socket) {
    // reading config from DB for auto setting the connection Params

    socket.on('readConfig', function () {
      let addr = db.CommConf.findOne({}, { config: true, _id: false }, { sort: { createdOn: -1 } },
        (err, result) => {
          if (err) {
            console.log('Error: ', err)
          }
          if (result) {
            console.log(result)
            config.netAddr = result.config.netAddr
            config.rackNo = result.config.rackNo
            config.slotNo = result.config.slotNo

            console.log('config', config)
            s7client.ConnectTo(config.netAddr, config.rackNo, config.slotNo)
          }
        })
    })
    // Start plc connection
    socket.on('plcRead', function () {
      s7client.Connect(function (err) {
        // s7client.ConnectTo(config.netAddr, config.rackNo, config.slotNo, function (err) {
        // s7client.ConnectTo('192.168.1.170', 0, 1, function (err) {
        if (err) {
          return console.log(' >> Connection failed. Code #' + err + ' - ' + s7client.ErrorText(err))
        }
        // If no Error, writing functions for communication with Plc
        s7client.DBRead(1, 0, 4, function (error, result) {
          if (error) {
            return console.log(' >> Connection failed. Code #' + err + ' - ' + s7client.ErrorText(err))
          }
          if (result) {
            let arr = BitArray.parse(result)
            console.log('Read: ', arr)

            socket.emit('newValues', arr)
          }
        })
      })
    })

    // write other values
    socket.on('plcWrite', function (data) {
      s7client.Connect(function (err) {
        // s7client.ConnectTo(config.netAddr, config.rackNo, config.slotNo, function (err) {
        // s7client.ConnectTo('192.168.1.170', 0, 1, function (err) {
        if (err) {
          return console.log(' >> Connection failed. Code #' + err + ' - ' + s7client.ErrorText(err))
        }
        // If no Error, writing functions for communication with Plc

        data = Buffer.from([0x01, 0x02])
        s7client.DBWrite(1, 0, 2, data, function (error, result) {
          if (error) {
            return console.log(' >> Connection failed. Code #' + err + ' - ' + s7client.ErrorText(err))
          }
          if (result) {
            let arr = BitArray.fromBinary(result)
            console.log('Write: ', arr.toJSON())
          }
        })
      })
    })

    // output change
    socket.on('outputChange', function (data) {
      io.sockets.emit('outputChange_res', data)
      let dummy = JSON.parse(data)
      let byte0 = dummy.slice(0, 8)
      let byte1 = dummy.slice(8, 16)
      let byte2 = dummy.slice(16, 24)
      let byte3 = dummy.slice(24, 32)

      let array = []

      let prebuf = array.concat(BitArray.toNumber(byte0), BitArray.toNumber(byte1), BitArray.toNumber(byte2), BitArray.toNumber(byte3))

      console.log('buffer :', Buffer.from(prebuf))
      console.log(prebuf)

      s7client.Connect(function (err) {
        if (err) throw err
        s7client.DBWrite(1, 0, 4, Buffer.from(prebuf), function (error, result) {
          if (error) {
            return console.log(' >> Connection failed. Code #' + err + ' - ' + s7client.ErrorText(err))
          }
          if (result) {
            let arr = BitArray.fromBinary(result)
            console.log('Write: ', arr.toJSON())
          }
        })
      })
    })

    // Input Change

    socket.on('inputChange', function (data) {
      io.sockets.emit('inputChange_res', data)
      console.log('inputChange :', data)
    })

    // get CPU info
    socket.on('plcGetCpuInfo', function () {
      let cpuInfo
      if (!cpuInfo) {
        cpuInfo = s7client.GetCpuInfo()
        console.log(cpuInfo)
        socket.emit('plcGetCpuInfo_res', { err: null, cpuInfo: cpuInfo, execTime: s7client.ExecTime() })
      } else {
        socket.emit('plcGetCpuInfo_res', { err: s7client.ErrorText(s7client.LastError()), cpuInfo: null, execTime: s7client.ExecTime() })
      }
    })

    // get plc object data
    socket.on('plcGetOrderCode', function () {
      let orderCode
      if (!orderCode) {
        orderCode = s7client.GetOrderCode()
        socket.emit('plcGetOrderCode_res', { err: null, orderCode: orderCode, execTime: s7client.ExecTime() })
      } else {
        socket.emit('plcGetOrderCode_res', {err: s7client.ErrorText(s7client.LastError()), orderCode: null, execTime: s7client.ExecTime()})
      }
    })

    // perform plc hot start
    socket.on('plcHotStart', function (err) {
      let plcHotStart = s7client.PlcHotStart(function (err) {
        if (err) console.log(s7client.ErrorText(err))
      })
      if (!err) {
        socket.emit('plcHotStart_res', { err: null, plcHotStart: plcHotStart, execTime: s7client.ExecTime() })
      } else {
        socket.emit('plcHotStart_res', { err: s7client.ErrorText(s7client.LastError()), orderCode: null, execTime: s7client.ExecTime() })
      }
    })

    // perform plc cold start
    socket.on('plcColdStart', function (err) {
      let plcColdStart = s7client.PlcColdStart()
      if (!err) {
        socket.emit('plcColdStart_res', { err: null, plcColdStart: plcColdStart, execTime: s7client.ExecTime() })
      } else {
        socket.emit('plcColdStart_res', { err: s7client.ErrorText(s7client.LastError()), orderCode: null, execTime: s7client.ExecTime() })
      }
    })

    // perform plc stop
    socket.on('plcStop', function (err) {
      let plcStop = s7client.PlcStop()
      if (!err) {
        socket.emit('plcStop_res', { err: null, plcStop: plcStop, execTime: s7client.ExecTime() })
      } else {
        socket.emit('plcStop_res', { err: s7client.ErrorText(s7client.LastError()), orderCode: null, execTime: s7client.ExecTime() })
      }
    })

    // get plc Status
    socket.on('plcStatus', function (err) {
      let plcStatusRaw = s7client.PlcStatus(function (err) {
        if (err) console.log(s7client.ErrorText(err))
      })
      console.log(plcStatusRaw)
      let plcStatus
      if (plcStatusRaw === 8) {
        plcStatus = 'Run'
      } else if (plcStatusRaw === 4) {
        plcStatus = 'Stopped'
      } else {
        plcStatus = 'Unknown'
      }
      if (!err) {
        socket.emit('plcStatus_res', { err: null, plcStatus: plcStatus, execTime: s7client.ExecTime() })
      } else {
        socket.emit('plcStatus_res', { err: s7client.ErrorText(s7client.LastError()), orderCode: null, execTime: s7client.ExecTime() })
      }
    })
  })
}
