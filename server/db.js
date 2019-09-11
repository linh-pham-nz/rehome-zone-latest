const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)

module.exports = {
  getCats,
  postCatData,
  getChosenDbCat
}

function getCats() {
  return db('cats').select()
}

function getChosenDbCat(id) {
  return db('cats')
    .where('id', id).first()
}

function postCatData(data) {
  return db('cats')
    .insert({
      name: data.name, 
      breed: data.breed,
      gender: data.gender,
      age: data.age,
      about: data.about
    })
}