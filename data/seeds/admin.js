exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {admin_id: '5', adminFirst: 'Jack', adminLast: 'Dempsy', auth_id: '1', email: 'admin123@sitc.cloud'},
        {admin_id: '903', adminFirst: 'Jill', adminLast: 'Hill', auth_id: '1', email: 'jill@sitc.cloud'},
        {admin_id: '50', adminFirst: 'Jester', adminLast: 'Tester', auth_id: '1', email: 'jt@sitc.cloud'},
        {admin_id: '501', adminFirst: 'Dummy', adminLast: 'Administrator', auth_id: '1', email: 'administrator_1@sitc.cloud'}
      ]);
    });
};
