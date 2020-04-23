
exports.up = (knex) => {
  return knex.schema.table('users', table => {
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP')).alter();
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')).alter();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
