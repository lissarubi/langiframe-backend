const express = require('express')
const routes = express.Router()
const execController = require('./controllers/execController')
const printController = require('./controllers/printController')


routes.post('/exec', execController.create)
routes.post('/print', printController.create)

module.exports = routes