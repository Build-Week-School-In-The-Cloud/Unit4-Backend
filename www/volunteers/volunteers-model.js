const db = require('../../config/db-config');

module.exports = {
    find,
    findById,
    update,
    findByTask,

}

function find() {
    return db('users')
        .table('task as t')
        .join('volunteer as v', 'v.volunteer_id' , 't.assigned_to')
}

function findByTask(volunteer_id) {
    return db('users')
        .table('task as t')
        .join('volunteer as v', 'v.volunteer_id' , 't.assigned_to')

        .where({assigned_to: volunteer_id })
        
}

async function findById(volunteer_id) {
    const [id] = await db('users')
        .table('volunteer as v')
        .join('task as t','v.id' , 't.assigned_to')
        .where({ id: v.volunteer_id})
        
}

async function update(task) {
    const [task_id] = await db('users')
        .table('task as t')
        .join('volunteer as v', 'v.volunteer_id' , 't.assigned_to')
        .update(task);

        return findById(task_id)

}
