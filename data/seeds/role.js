
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('role').del()
    .then(function () {
      // Inserts seed entries
      return knex('role').insert([
        {role_id: 2, user_id: '18', role: 'volunteer' , volunteer_id: 24, student_id: null, administrator_id: null }
      ]);
    });
};
