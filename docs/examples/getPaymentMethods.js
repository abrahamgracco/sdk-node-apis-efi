'use strict';

var util = require('util');
var Gerencianet = require('gn-api-sdk-node');
var credentials = require('./credentials');

var options = {
  client_id: credentials.client_id,
  client_secret: credentials.client_secret,
  sandbox: true
}

var paymentMethodInput = {
  method: 'visa',
  total: 5000
}

var gerencianet = new Gerencianet(options);

gerencianet
  .getPaymentMethods(paymentMethodInput)
  .then(function (installments) {
    console.log('Response:',
      util.inspect(installments, false, null));
  })
  .catch(function (err) {
    console.log('Error:', err);
  });