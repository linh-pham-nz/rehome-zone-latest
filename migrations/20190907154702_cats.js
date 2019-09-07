
exports.up = function(knex) {
  return knex.schema.createTable('cats', table => {
      table.increments('id')
      table.string('name')
      table.string('gender')
      table.string('breed')
      table.integer('age')
      table.string('about')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cats')
};
