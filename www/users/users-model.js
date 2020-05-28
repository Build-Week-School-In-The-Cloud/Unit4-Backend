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

    const [user_id] = await db('users').insert(user)

    return findById(user_id)
}

function findById(user_id) {
    return db('users')
        .where({ user_id })
        .first()
}

function login(filter) {
    return db('users')
        .where(filter)
}

function filterById(user_id) {
    return db('users')
        .where({ user_id })
        .first()
}

function findBy({ username }) {
    return db('users')
        .where({ username })
        .first()
}

function find() {
    return db('users')
        .select('user_id', 'username', 'password', 'role')
}
