
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        {firstName: 'Value1', lastName: 'Student', auth_id: ''},
      ]);
    });
};
