const db = require('../../config/db-config')

module.exports = {
    add,
    findById,
    find,
}

async function add(user) {
    const [id] = await db('users').insert(user)

    return findById(id)
}

function findById(id) {
    return db('users')
        .where({ id })
        .first()
}

function find() {
    return db('users')
        .select('id', 'username', 'password', 'role')
}
