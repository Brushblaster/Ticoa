'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// const mongoose = require('./models')
const config = require('./config/config')
// const db = mongoose.connection
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', function (socket) {
  socket.emit('news', {hello: 'world'})
  socket.on('my other event', function (data) {
    console.log(data)
  })
})

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

server.listen(config.port || 8081)
console.log(`Server started on port ${config.port}`)
