
exports.up = (knex) => {
  return knex.schema.table('users', table => {
    table.string('password');
    table.enu('role', ['admin', 'user']).defaultTo('user');
  });
};

exports.down = (knex) => {
  return knex.schema.alterTable('users', table => {
    table.dropColumn('groupID');
    table.dropColumn('password');
    table.dropColumn('role');
  });
};
