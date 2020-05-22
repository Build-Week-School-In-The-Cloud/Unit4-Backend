
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {task_name: 'Zoom Session', created_by: '2', 
        description: 'Prepare the PVD and DB Schema', 
        due_date: '', assigned_to: '1'},
        {task_name: 'Study Session', created_by: '2', 
        description: 'Prepare the PVD and DB Schema', 
        due_date: '', assigned_to: '4'},
        {task_name: 'Study Session', created_by: '2', 
        description: 'Prepare the PVD and DB Schema', 
        due_date: '', assigned_to: '8'}
      ]);
    });
};
