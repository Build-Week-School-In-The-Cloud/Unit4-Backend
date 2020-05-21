const db = require('../../config/db-config');

module.exports = {
    find,
    findById,
    add,

}

function find() {
    return db('user').table('admin')
        .select('id', 'firstName', 'lastName')
}

function findById(id) {
    return db('user').table('admin')
        .where({ id })
        .first()
}

async function add(admin) {
    const [id] = await db('user').table('admin').insert(admin);

    return findById(id)

}
