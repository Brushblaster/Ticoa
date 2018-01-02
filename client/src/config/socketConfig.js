
const config = {
  protocol: 'http',
  url: 'localhost',
  port: '80'
}

export default {
  socketURL: '' + config.protocol + '://' + config.url + ':' + config.port + ''
}

