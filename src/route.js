// importando Express
const express = require('express')

// instanciando rotas
const route = express.Router()

//pegando a index.ejs (require, response)
route.get('/', (req, res) => res.render('index'))


// exportando route
module.exports = route