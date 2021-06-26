// importando Express
const express = require('express')

//Controller
const QuestionController = require('./controllers/QuestionController')

// instanciando rotas
const route = express.Router()

// pegando as rotas
route.get('/', (req, res) => res.render('index'))
route.get('/room', (req, res) => res.render('room'))
route.get('/create-password', (req, res) => res.render('create-password'))

//('/room/{id-sala}/{id-pergunta}/ação') 
//Formato que o formulário de dentro da modal passa as informações
route.post('/room/:room/:question/:action', QuestionController.index)

// exportando route
module.exports = route