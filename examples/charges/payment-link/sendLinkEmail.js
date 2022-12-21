const Gerencianet = require('gn-api-sdk-node')
const options = require('../../credentials')

let params = {
	id: 1000,
}

let body = {
	email: 'oldbuck@gerencianet.com.br',
}

const gerencianet = new Gerencianet(options)

gerencianet.sendLinkEmail(params, body)
	.then((resposta) => {
		console.log(resposta)
	})
	.catch((error) => {
		console.log(error)
	})
