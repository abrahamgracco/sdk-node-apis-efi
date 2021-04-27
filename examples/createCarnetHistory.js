'use strict';

var Gerencianet = require('gn-api-sdk-node');
var options = require('./credentials');


var params = {
  id: 1001
}

var body = {
  description: 'This carnet is about a service'
}

var gerencianet = new Gerencianet(options);

gerencianet
  .createCarnetHistory(params, body)
  .then(console.log)
  .catch(console.log)
  .done();