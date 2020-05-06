exports.seed = (knex) => {
  return knex('categories').insert([
    {
      name: 'Wekap',
      status: 'important'
    },
    {
      name: 'Brekkfast',
      status: 'important'
    },
    {
      name: 'Gulugulu',
      status: 'important'
    },
    {
      name: 'Megvalami',
      status: 'family'
    },
    {
      name: 'Repeat',
      status: 'freetime'
    }
  ]);
};
