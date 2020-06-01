const db = require('../../config/db-config');

module.exports = {
    find,
    findById,
    add,
    vsearch,
    remove,
    findTaskByAssigned,
    findTaskByCreated,

}

function find() {
    return db('users').table('task')       
}

function vsearch() {
    return db('users').table('task as t')
        .join('volunteer as v', 'v.id', 't.assigned_to')
        // .where('t.assigned_to', '=' ,'v.id')
}

function findById(task_id) {
    return db('users').table('task')
        .where({ task_id: task_id })
        .first()
}

async function add(task) {
    const [task_id] = await db('users').table('task').insert(task);

    return findById(task_id)

}

function findTaskByAssigned(assigned_to) {
    return db('users').table('task as t')
        .join('volunteer as v', 'v.volunteer_id', 't.assigned_to')
        .where({assigned_to: v.volunteer_id})


}

function findTaskByCreated(created_by) {

}

function remove(task_id) {
    return db('users').table('task')
        .where({task_id: task_id})
        .del()
}

/* async function edit(task) { 
    const [task_id] = await db('users')
        .table('task as t')
        .join('volunteer as v', 't.assigned_to')}
*/