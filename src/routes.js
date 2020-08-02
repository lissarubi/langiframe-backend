const express = require('express')
const routes = express.Router()
const execController = require('./controllers/execController')

routes.post('/exec', execController.create)

module.exports = routes
