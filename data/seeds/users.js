exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
        return knex('users').insert([
        {username: 'student', role: 'student', password: 'student'},
        {username: 'admin', role: 'administrator', password: 'admin'},
        {username: 'volunteer', role: 'volunteer', password: 'credit'}
      ]);

    });
};

