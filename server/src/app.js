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

let getUser = require('./lib/getUser')
let loginUser = require('./lib/loginUser')
let createUser = require('./lib/createUser')
let authenticateUser = require('./lib/authenticateUser')

global.userSessions = {}

io.on('connection', function (socket) {
  socket.emit('message', {hello: 'world'})

  console.log('Frontend has Connected')

  // Get authenticated user
  socket.on('userGet', function (token) {
    getUser(socket, token)
  })

  // Create new user
  socket.on('userCreate', function (data) {
    console.log('user create recieved ' + data.password + ' ' + data.email)
    createUser(socket, data)
  })

  // Login
  socket.on('userLogin', function (data) {
    console.log('user Login recieved ' + data.password + ' ' + data.email)
    authenticateUser(socket, data)
  })

  // Log the authenticated user out
  socket.on('userLogout', function (token) {
    delete global.userSessions[token]
  })
})

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

server.listen(config.port || 8081)
console.log(`Server started on port ${config.port}`)
