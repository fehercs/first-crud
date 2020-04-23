
exports.up = (knex) => {
  return knex.schema.createTable('todos', (table) => {
    table.increments();
    table.string('name');
    table.string('description');
    table.string('status');
    table.integer('userID').unsigned();
    table.foreign('userID').references('users.id');
    table.integer('categoryID').unsigned();
    table.foreign('categoryID').references('categories.id');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('todos');
};
