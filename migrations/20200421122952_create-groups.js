
exports.up = (knex) => {
  return knex.schema.createTable('groups', (table) => {
    table.increments();
    table.string('name');
    table.string('description');
    table.string('location');
    table.integer('maximalSize');
    table.timestamps();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('groups');
};
