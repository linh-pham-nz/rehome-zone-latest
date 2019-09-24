const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const connection = require('knex')(config)

module.exports = {
  getCats,
  postCatData,
  getChosenDbCat
}

function getCats(db=connection) {
  return db('cats').select()
}

function getChosenDbCat(id, db=connection) {
  return db('cats')
    .where('id', id).first()
}

function postCatData(data, db=connection) {
  return db('cats')
    .insert({
      name: data.name, 
      breed: data.breed,
      gender: data.gender,
      age: data.age,
      about: data.about
    })
}