
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      // Inserts seed entries
      return knex('cats').insert([
        {id: 1, 
          name: 'Andy', 
          gender: 'Male', 
          breed: 'Domestic Short Hair', 
          age: '9', 
          about: 'Andy is very shy and may take a while to warm up to you, however, enjoys human affection and being gently brushed.'},
        {id: 2, 
          name: 'Darla', 
          gender: 'Female', 
          breed: 'Domestic Medium Hair Cross', 
          age: '12', 
          about: 'Darla is an older cat who enjoys the quiet life. She loves snuggling on the couch.'},
        {id: 3, 
          name: 'Sophie', 
          gender: 'Female', 
          breed: 'Domestic Short Hair Cross', 
          age: '3', 
          about: 'Sophie is very social and loves to be around other animals.'},
        {id: 4, 
          name: 'Ray', 
          gender: 'Male', 
          breed: 'Domestic Short Hair Cross', 
          age: '1', 
          about: 'Ray Ray is an adorable young man who enjoys running around outdoors. He is an explorer and loves to play with animals and humans alike.'}
      ]);
    });
};


