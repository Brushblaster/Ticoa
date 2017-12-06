module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Hello ${req.body.email} ! Your User was registerd!`

    })
  })
}
