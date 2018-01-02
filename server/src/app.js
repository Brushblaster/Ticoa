'use strict'
/* const os = require('os')
const ifaces = os.networkInterfaces()
const ip = ifaces.wlan0[0].address
process.env.BASE_URL = ip
console.log(process.env.BASE_URL) */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// const morgan = require('morgan')
const mongoose = require('./models')
mongoose.Promise = global.Promise
const config = require('./config/config')
const db = mongoose.connection
const app = express()

// Optional fallthrough error handler
app.use(function onError (err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500
  res.end(res.sentry + '\n')
  if (err) throw err
})

const server = require('http').Server(app)
const io = require('socket.io')(server)
// const socket = io.conn()
const s7 = require('./plc/connectMethod')(io)
const getConfig = require('./plc/getConfig')(io)

// app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// initialize Routes
app.use('/api', require('./routes'))

// require('./routes')(app)

app.use(express.static('public'))

server.listen(config.port)
// app.listen(config.port || 8081)
console.log(`Server started on ${config.port}`)
