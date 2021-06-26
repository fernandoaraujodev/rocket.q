// importando Express
const express = require('express')

// importando route
const route = require('./route')

const path = require('path')

// instanciando o server
const server = express()

// identificando ejs como view engine responsável
server.set('view engine', 'ejs')

server.use(express.static('public'))

// mostrando o caminho do folder views para o express
server.set('views', path.join(__dirname, 'views'))

// configurando o middleware
server.use(express.urlencoded({extended: true}))

// usando o route
server.use(route)
server.listen(3000, () => console.log("funfando"))