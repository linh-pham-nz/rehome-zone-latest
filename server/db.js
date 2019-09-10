const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)

module.exports = {
  getCats,
  postCatData
}

function getCats() {
  return db('cats').select()
}
 
function postCatData(data) {
  return db('cats')
    .insert({
      name: data.name, 
      breed: data.breed,
      age: data.age
    })
}