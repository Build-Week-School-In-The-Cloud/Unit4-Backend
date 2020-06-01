
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('volunteer').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteer').insert([
        { 
        volunteer_firstName: 'Bruce', 
        volunteer_lastName: 'Willis', 
        country: 'USA', 
        on_line: '1',
        email: 'volunteer2@sitc.cloud',
        auth_id: '',
        available_time: '9am-5pm'},
        { 
        volunteer_firstName: 'Lisa', 
        volunteer_lastName: 'Willis', 
        country: 'USA',
        email: 'volunteer5@sitc.cloud',
        on_line: '1',
        auth_id: '',
        available_time: '9am-5pm'},
        { 
        volunteer_firstName: 'Sherr', 
        volunteer_lastName: 'Willis', 
        country: 'USA', 
        email: 'volunteer22@sitc.cloud',
        on_line: '0',
        auth_id: '',
        available_time: '9am-5pm'},
        { 
        volunteer_firstName: 'Bruce', 
        volunteer_lastName: 'Lee', 
        country: 'CHINA', 
        email: 'volunteer12@sitc.cloud',
        on_line: '0',
        auth_id: '',
        available_time: '9am-5pm'}
      ]);
    });
};
