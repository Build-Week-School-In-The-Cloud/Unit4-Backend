
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        {studentFirst: 'Value1', studentLast: 'Student', studentId: '001', email: 'student1@lambda.edu'},
        {studentFirst: 'Value2', studentLast: 'Student', studentId: '560', email: 'student2@lambda.edu'},
        {studentFirst: 'Studious', studentLast: 'Student', studentId: '608', email: 'student3@lambda.edu'}
      ]);
    });
};
