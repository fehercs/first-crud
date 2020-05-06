const bcrypt = require('bcrypt');

exports.seed = (knex) => {
  return knex('users').insert([
    {
      firstName: 'Jon',
      lastName: 'Doe',
      email: 'jon@doe.com',
      age: 33,
      groupID: 1,
      password: bcrypt.hashSync('asd123', 10),
      role: 'admin'
    },
    {
      firstName: 'Teszt',
      lastName: 'Teszt',
      email: 'test@test.com',
      age: 18,
      groupID: 2,
      password: bcrypt.hashSync('asd123', 10),
      role: 'user'
    },
    {
      firstName: 'Jakab',
      lastName: 'Gipsz',
      email: 'jakab@gipsz.com',
      age: 45,
      groupID: 3,
      password: bcrypt.hashSync('asd123', 10),
      role: 'user'
    },
    {
      firstName: 'Julie',
      lastName: 'Gipszne',
      email: 'Ju@li.com',
      age: 44,
      groupID: 4,
      password: bcrypt.hashSync('asd123', 10),
      role: 'user'
    },
    {
      firstName: 'Bela',
      lastName: 'Cela',
      email: 'bela@cela.com',
      age: 55,
      groupID: 5,
      password: bcrypt.hashSync('asd123', 10),
      role: 'user'
    }
  ]);
};
