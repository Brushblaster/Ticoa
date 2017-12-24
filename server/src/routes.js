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
  console.log(req.body)
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

module.exports = router
