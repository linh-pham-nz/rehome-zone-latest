const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)

module.exports = {
  getCats
}

function getCats() {
  return db('cats').select()
}
 