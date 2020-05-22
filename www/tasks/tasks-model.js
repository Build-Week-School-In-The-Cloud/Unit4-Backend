const db = require('../../config/db-config');

module.exports = {
    find,
    findById,
    add,

}

function find() {
    return db('users').table('task')       
}

function findById(task_id) {
    return db('users').table('task')
        .where({ task_id })
        .first()
}

async function add(task) {
    const [id] = await db('users').table('task').insert(task);

    return findById(task_id)

}
