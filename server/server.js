const path = require('path')
const express = require('express')
const server = express()

const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)

const Routes = require('./routes/routes')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/', Routes)

module.exports = server