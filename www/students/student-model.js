const db = require('../../config/db-config')

module.exports = {
    findVolunteers,
    findByCountry,
    findStudent,
    findByVolunteerId

}

function findVolunteers() {
    return db('users').table('volunteer')
}

function findStudent() {
    return db('users').table('student')
        
}

function findByCountry(country) {
    return db('users').table('volunteer')
        .where({country: country})
}

function findByTime(available_time) {
    return db('users').table('volunteer')
        .where({available_time: available_time})
        
}

function findByEmail(email) {
    return db('users').table('volunteer')
        .where({email: email})
}


function findByVolunteerId(volunteer_id) {
    return db('users').table('volunteer')
        .where({volunteer_id: volunteer_id})
}