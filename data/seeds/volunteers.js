
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('volunteer').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteer').insert([
        {auth_id: '', 
        firstName: 'Bruce', 
        lastName: 'Willis', 
        country: 'USA', 
        available: '1', 
        available_time: '9am-5pm'},
        {auth_id: '', 
        firstName: 'Lisa', 
        lastName: 'Willis', 
        country: 'USA', 
        available: '1', 
        available_time: '9am-5pm'},
        {auth_id: '', 
        firstName: 'Sherr', 
        lastName: 'Willis', 
        country: 'USA', 
        available: '0', 
        available_time: '9am-5pm'},
        {auth_id: '', 
        firstName: 'Bruce', 
        lastName: 'Lee', 
        country: 'CHINA', 
        available: '0', 
        available_time: '9am-5pm'}
      ]);
    });
};
