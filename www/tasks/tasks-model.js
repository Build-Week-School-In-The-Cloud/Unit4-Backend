const db = require('../../config/db-config');

module.exports = {
    find,
    findById,
    add,
    vsearch,

}

function find() {
    return db('users').table('task')       
}

function vsearch() {
    return db('users').table('task as t')
        .join('volunteer as v', 'v.id', 't.assigned_to')
        // .where('t.assigned_to', '=' ,'v.id')
}

function findById(id) {
    return db('users').table('task')
        .where({ task_id })
        .first()
}

async function add(task) {
    const [task_id] = await db('users').table('task').insert(task);

    return findById(id)

}

/* async function edit(task) { 
    const [task_id] = await db('users')
        .table('task as t')
        .join('volunteer as v', 't.assigned_to')}
*/