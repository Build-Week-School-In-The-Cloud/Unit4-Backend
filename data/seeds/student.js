
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        {studentFirst: 'Value1', studentLast: 'Student', studentId: '001', student_email: 'student1@lambda.edu', age: 14, country_id: 'US', auth_id: ''},
        {studentFirst: 'Value2', studentLast: 'Student', studentId: '560', student_email: 'student2@lambda.edu', age: 15, country_id: 'CA', auth_id: ''},
        {studentFirst: 'Studious', studentLast: 'Student', studentId: '608', student_email: 'student3@lambda.edu', age: 10, country_id: 'EUR', auth_id: ''}
      ]);
    });
};
