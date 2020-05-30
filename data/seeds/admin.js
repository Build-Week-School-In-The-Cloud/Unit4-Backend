exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {admin_id: '5', admin_First: 'Jack', admin_Last: 'Dempsy', auth_id: '1', email: 'admin123@sitc.cloud'},
        {admin_id: '903', admin_First: 'Jill', admin_Last: 'Hill', auth_id: '1', email: 'jill@sitc.cloud'},
        {admin_First: 'Jester', admin_Last: 'Tester', auth_id: '1', email: 'jt@sitc.cloud'},
        {admin_id: '501', admin_First: 'Dummy', admin_Last: 'Administrator', auth_id: '1', email: 'administrator_1@sitc.cloud'}
      ]);
    });
};
