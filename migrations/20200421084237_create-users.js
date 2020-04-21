
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('firstName');
    table.string('lastName');
    table.string('email');
    table.integer('age');
    table.timestamps();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
