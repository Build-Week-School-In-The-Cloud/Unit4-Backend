const db = require('../../config/db-config');

module.exports = {
    find,
    findById,
    add,

}

function find() {
    return db('users').table('admin')
        .select('id', 'firstName', 'lastName')
}

function findById(id) {
    return db('users').table('admin')
        .where({ id })
        .first()
}

async function add(admin) {
    const [id] = await db('users').table('admin').insert(admin);

    return findById(id)

}
