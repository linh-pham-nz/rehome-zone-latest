const path = require('path')
const express = require('express')

const Routes = require('./routes/routes')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/', Routes)

module.exports = server