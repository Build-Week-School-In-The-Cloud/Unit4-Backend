exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {admin_First: 'Jack', admin_Last: 'Dempsy', auth_id: '1', email: ''},
        {admin_First: 'Jill', admin_Last: 'Hill', auth_id: '1', email: ''},
        {admin_First: 'Jester', admin_Last: 'Tester', auth_id: '1', email: ''},
        {admin_First: 'Dummy', admin_Last: 'Administrator', auth_id: '1', email: ''}
      ]);
    });
};
