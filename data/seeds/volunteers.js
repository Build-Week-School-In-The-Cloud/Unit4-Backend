
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('volunteer').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteer').insert([
        { 
        firstName: 'Bruce', 
        lastName: 'Willis', 
        country: 'USA', 
        on_line: '1', 
        available_time: '9am-5pm'},
        { 
        firstName: 'Lisa', 
        lastName: 'Willis', 
        country: 'USA', 
        on_line: '1', 
        available_time: '9am-5pm'},
        { 
        firstName: 'Sherr', 
        lastName: 'Willis', 
        country: 'USA', 
        on_line: '0', 
        available_time: '9am-5pm'},
        { 
        firstName: 'Bruce', 
        lastName: 'Lee', 
        country: 'CHINA', 
        on_line: '0', 
        available_time: '9am-5pm'}
      ]);
    });
};
