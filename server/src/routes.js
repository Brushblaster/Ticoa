const express = require('express')
const router = express.Router()
const db = require('./models')
router.post('/', (req, res) => {
  res.send({
    message: `Hello ${req.body.email} ! Your User was registerd!`

  })
})

// get the Config sent by the Front-End and save it to the Database
router.post('/config', (req, res) => {
  db.CommConf.create(req.body)
    .then(CommConf => {
      res.send(CommConf)
    })
    .catch(error => console.log('Model Error: ', error))
})

// get the last saved Parameter Configuration file
router.get('/lastconf', (req, res) => {
  db.CommConf
    .find('config').limit(1)
    .where('config').ne(null)
    .sort('-createdOn')
    .then(CommConf => {
      res.send(CommConf[0])
    })
    .catch(error => console.log(error))
})

// get the changed output state save it to MongoDB and switch the outputs
router.post('/output', (req, res) => {
  console.log(req.body)
  db.Output.create(req.body)
    .then(Output => {
      res.send(Output)
    })
    .catch(error => console.log('Model Error: ', error))
})

module.exports = router
