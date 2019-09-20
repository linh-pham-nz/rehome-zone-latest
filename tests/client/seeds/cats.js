exports.seed = knex =>
  knex('cats').del()
    .then(() =>
      knex('cats').insert([
        {id: 1, name: 'Joseph', gender: 'Male', age: 3},
        {id: 2, name: 'Tobermory', gender: 'Male', age: 6},
        {id: 3, name: 'Madame', gender: 'Female', age: 9}
      ]))