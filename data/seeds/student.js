
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        {studentFirst: 'Value1', studentLast: 'Student', studentId: '001', student_email: 'student1@lambda.edu'},
        {studentFirst: 'Value2', studentLast: 'Student', studentId: '560', student_email: 'student2@lambda.edu'},
        {studentFirst: 'Studious', studentLast: 'Student', studentId: '608', student_email: 'student3@lambda.edu'}
      ]);
    });
};
