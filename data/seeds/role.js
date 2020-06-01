
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('role').del()
    .then(function () {
      // Inserts seed entries
      return knex('role').insert([
        {role_id: 2, 
          user_id: '17', 
          role: 'volunteer' , 
          volunteer_id: 14, 
          student_id: '', 
          administrator_id: '' },
          {role_id: 1, 
            user_id: '18', 
            role: 'administrator' , 
            volunteer_id: '', 
            student_id: '', 
            administrator_id: '' }
      ]);
    });
};
