exports.seed = (knex) => {
  return knex('todos').insert([
    {
      name: 'EzMegAz',
      description: 'Valami',
      status: 'new',
      userID: 1,
      categoryID: 2
    },
    {
      name: 'EzMegAz',
      description: 'Valami',
      status: 'new',
      userID: 2,
      categoryID: 3
    },
    {
      name: 'EzMegAz',
      description: 'Valami',
      status: 'new',
      userID: 4,
      categoryID: 5
    },
    {
      name: 'EzMegAz',
      description: 'Valami',
      status: 'new',
      userID: 5,
      categoryID: 1
    },
    {
      name: 'EzMegAz',
      description: 'Valami',
      status: 'new',
      userID: 3,
      categoryID: 4
    }
  ]);
};
