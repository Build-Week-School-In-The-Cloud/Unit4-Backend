const db = require('../../config/db-config')

module.exports = {
    add,
    findById,
    find,
    findBy,
    filterById,
}

async function add(user) {
    user.password = await bcrypt.hash(user.password, 12)

    const [id] = await db('users').insert(user)

    return findById(id)
}

function findById(id) {
    return db('users')
        .where({ id })
        .first()
}

function login(filter) {
    return db('users')
        .where(filter)
}

function filterById(role_id) {
    return db('users')
        .where({ role_id })
        .first()
}

function findBy({ username }) {
    return db('users')
        .where({ username })
        .first()
}

function find() {
    return db('users')
        .select('id', 'username', 'password', 'role')
}
