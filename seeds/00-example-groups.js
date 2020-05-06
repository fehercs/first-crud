exports.seed = (knex) => {
  return knex('groups').insert([
    {
      name: 'GrupA',
      description: 'A GrupA',
      location: 'Antwerp',
      maximalSize: 11
    },
    {
      name: 'GrupB',
      description: 'A GrupB',
      location: 'Boston',
      maximalSize: 22
    },
    {
      name: 'GrupC',
      description: 'A GrupC',
      location: 'Copenhagen',
      maximalSize: 33
    },
    {
      name: 'GrupD',
      description: 'A GrupD',
      location: 'Detroit',
      maximalSize: 44
    },
    {
      name: 'GrupE',
      description: 'A GrupE',
      location: 'Eindhoven',
      maximalSize: 55
    }
  ]);
};
