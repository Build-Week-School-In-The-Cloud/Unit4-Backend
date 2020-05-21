exports.up = function(knex) {
    return knex.schema

        //Primary User's table
        .createTable('users', users => {
            users.increments()

            users.string('username', 255)
                .notNullable()
                .unique()

            users.string('password', 255)
                .notNullable();

            users.string('role', 255)
                .notNullable()

        })

        // Secondary Role Table
        .createTable('user-role', table => {
            table.increments()

            table.boolean('logged_in')
                .notNullable()
                .defaultTo(false)

            table.string('role_name', 255)
                .notNullable()

        })


        // Student's Table
        .createTable('student', tbl => {
            tbl.increments()

            tbl.string('firstName', 255)
                .notNullable()

            tbl.string('lastName', 255)
                .notNullable()

            tbl.integer('auth_id')
                .defaultTo('0')

        })

        // Administrator's Table
        .createTable('admin', tbl => {
            tbl.increments()

            tbl.string('firstName')
                .notNullable()

            tbl.string('lastName')
                .notNullable()

            tbl.integer('auth_id')
                .defaultTo('1')
        })

        // Volunteer Table
        .createTable('volunteer', tbl => {
            tbl.increments()

            tbl.string('firstName')
                .notNullable()

            tbl.string('lastName')
                .notNullable()

            tbl.integer('auth_id')
                .defaultTo('2')
        })

};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('users')
    knex.schema.dropTableIfExists('user_role')
    knex.schema.dropTableIfExists('student')
    knex.schema.dropTableIfExists('admin')
    knex.schema.dropTableIfExists('volunteer')
};

