// importando Express
const express = require('express')

//Controller
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

// instanciando rotas
const route = express.Router()

// pegando as rotas
route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
route.get('/create-password', (req, res) => res.render('index', {page: 'create-password'}))


route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)


//('/room/{id-sala}/{id-pergunta}/ação') 
//Formato que o formulário de dentro da modal passa as informações
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/question/create/:room', QuestionController.create)

// exportando route
module.exports = route