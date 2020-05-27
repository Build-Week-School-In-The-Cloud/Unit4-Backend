const db = require('../../config/db-config')

module.exports = {
    find,
    findBy,
    findStudent

}

function find() {
    return db('users').table('volunteer')       
}

function findStudent() {
    return db('users').table('student')
}

function findBy(filter) {
    return db('users').table('voluteer')
        .where(filter)
}
