const db = require('../../config/db-config')

module.exports = {
    findVolunteers,
    findBy,
    findStudent,
    findBy

}

function findVolunteers() {
    return db('users').table('volunteer')
}

function findStudent() {
    return db('users').table('student')
        
}

function findBy(country) {
    return db('users').table('volunteer')
        .where({country: country})
}
