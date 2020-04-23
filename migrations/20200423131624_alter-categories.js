
exports.up = (knex) => {
  return knex.schema.table('categories', table => {
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    table.enum('status', ['important', 'freetime', 'family']).alter();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('categories');
};
