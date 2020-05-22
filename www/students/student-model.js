const db = require('../../config/db-config')

module.exports = {
    find,
    findBy

}

function find() {
    return db('users').table('volunteer')       
}

function findBy(filter) {
    return db('users').table('voluteer')
        .where(filter)
}
