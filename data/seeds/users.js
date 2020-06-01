exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
        return knex('users').insert([
        {username: 'student', address: '', role: 'student', password: 'student', age: 13, first_name: 'New', last_name: 'User', logged_in: 1},
        {username: 'student44', address: '',  role: 'student', password: 'student', age: 3, first_name: 'New', last_name: 'Student', logged_in: 0},
        {username: 'student4', address: '', role: 'student', password: 'student', age: 13, first_name: 'Old', last_name: 'User', logged_in: 0},
        {username: 'admin', address: '', role: 'administrator', password: 'admin', age: 31, first_name: 'New', last_name: 'Admin', logged_in: 0 },
        {username: 'volunteer', address: 'default', role: 'volunteer', password: 'credit', age: 30, first_name: 'Old', last_name: 'Volunteer', logged_in: 1} 
      ]);

    });
};

