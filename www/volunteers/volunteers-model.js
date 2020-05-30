const db = require('../../config/db-config');

module.exports = {
    find,
    findById,
    update,

}

function find() {
    return db('users')
        .table('task as t')
        .join('volunteer as v', 'v.id' , 't.assigned_to')
}

function findByTask(task_id) {
    return db('users')
        .table('task as t')
        .join('volunteer as v', 'v.id' , 't.assigned_to')

        .where({ task_id })
        .first()
}

function findById(task_id) {
    return db('users')
        .table('task as t')
        .join('volunteer as v','v.id' , 't.assigned_to')

        .where({ task_id })
        .first()
}

async function update(task) {
    const [task_id] = await db('users')
        .table('task as t')
        .join('volunteer as v', 'v.id' , 't.assigned_to')
        .update(task);

        return findById(task_id)

}
