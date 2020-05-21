exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {firstName: 'Jack', lastName: 'Dempsy', auth_id: 1},
        {firstName: 'Jill', lastName: 'Hill', auth_id: 1},
        {firstName: 'Jester', lastName: 'Tester', auth_id: 1},
        {firstName: 'Dummy', lastName: 'Administrator', auth_id: 1}
      ]);
    });
};
