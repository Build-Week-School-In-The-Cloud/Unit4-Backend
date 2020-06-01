const db = require('../../config/db-config');

module.exports = {
    find,
    findById,
    add,

}

function find() {
    return db('users').table('admin')
}

function findById(admin_id) {
    return db('users').table('admin')
        .where({ admin_id })
        .first()
}

async function add(admin) {
    const [admin_id] = await db('users').table('admin').insert(admin);

    return findById(admin_id)

}
