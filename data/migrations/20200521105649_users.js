exports.up = function(knex) {
    return knex.schema

    //TODO: users table should consider input from registration form 
        //Primary User's table
        .createTable('users', users => {
            users.increments()
                .notNullable()
                .primary()


            users.string('username', 255)
                .notNullable()
                .unique()

            users.string('password', 255)
                .notNullable();

            users.string('role', 255)
                .notNullable()

        })

        
        
        // Student's Table
        .createTable('student', tbl => {
            tbl.increments('studentId')
            .primary()
            
            tbl.string('studentFirst', 255)
            .notNullable()
            
            
            tbl.string('studentLast', 255)
            .notNullable()
            
            
            tbl.string('email')
            
            tbl.integer('auth_id')
                .defaultTo('0')
        })
        
        // Administrator's Table
        .createTable('admin', tbl => {
            tbl.increments('id')
            .primary()
            
            tbl.string('admin_First')
            .notNullable()
            
            tbl.string('admin_Last')
            .notNullable()
            
            tbl.integer('auth_id')
            .defaultTo('1')
            
            tbl.text('email')
           
        })
        
        // Volunteer Table
        .createTable('volunteer', tbl => {
            tbl.increments('id')
            .primary()
            
            tbl.string('firstName')
            .notNullable()
            
            tbl.string('lastName')
            .notNullable()
            
            tbl.integer('auth_id')
            .defaultTo('2')
            
            tbl.boolean('on_line')
            
            
            tbl.string('country')
            
            tbl.string('available_time')
        })
        
        // Secondary Role Table
        // .createTable('user-role', table => {
        //     table.increments('role_id')

            
        //     table.integer('user_id')
        //     .references('')

        //     table.string('role', 255)
        //     

        //     table.integer('volunteer_id')
        //         .references('id')
        //         .inTable('volunteer')
                
        //     table.integer('student_id')
        //     .references('studentId')
        //     .inTable('student')

        //     table.integer('administrator_id')
        //     .references('id')
        //     .inTable('admin')
                
        // })
        

            //Tasks table
        .createTable('task', tbl => {
            tbl.increments('task_id')
            tbl.string('task_name')
            tbl.integer('created_by')
            .references('id')
            .inTable('admin')

            tbl.integer('assigned_to')
                .references('id')
                .inTable('volunteer')

            tbl.string('description')
            tbl.date('due_date')
            tbl.boolean('completed')
                .defaultTo(false)
                
        })

};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('users')
    knex.schema.dropTableIfExists('student')
    knex.schema.dropTableIfExists('admin')
    knex.schema.dropTableIfExists('volunteer')
    knex.schema.dropTableIfExists('user_role')
    knex.schema.dropTableIfExists('task')
};

