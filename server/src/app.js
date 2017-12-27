'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// const morgan = require('morgan')
const mongoose = require('./models')
mongoose.Promise = global.Promise
const config = require('./config/config')
const db = mongoose.connection
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

const s7 = require('./plc/connectMethod')(io)

io.on('connection', function (socket) {
  socket.emit('message', {hello: 'world'})

  console.log('Frontend has Connected')
})

// app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// initialize Routes
app.use('/api', require('./routes'))

// require('./routes')(app)

server.listen(config.port || 8081) // app.listen(config.port || 8081)
console.log(`Server started on port ${config.port}`)
