const db = require('../../config/db-config');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,


}

function remove(id) {
    return db('users').table('admin')
    .where('admin_id', Number(id))
    .del();
}

function update(id, user)  {
    return db('users').table('admin')
    .where('admin_id', Number(id))
    .update(user);

}

function find() {
    return db('users').table('admin');
}

function findById(admin_id) {
    return db('users').table('admin')
        .where({ id: Number(admin_id) })
        .first();
}

async function add(admin) {
    return  db('users').table('admin').insert(admin)
    .then(ids => ({id: ids[0]}));

}
