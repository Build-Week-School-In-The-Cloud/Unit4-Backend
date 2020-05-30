exports.up = function(knex) {
    return knex.schema

    //TODO: users table should consider input from registration form 
        //Primary User's table
        .createTable('users', users => {
            users.increments('user_id')
                .notNullable()
                .primary()


            users.string('username', 255)
                .notNullable()
                .unique()

            users.string('password', 255)
                .notNullable();

            users.boolean('logged_in')
                .defaultTo(false)

            users.string('role', 255)
                .notNullable()

            users.string('email', 255)
                .unique()

            users.string('address', 255)
                .defaultTo('sitc.com')

        })

        
        
        // Student's Table
        .createTable('student', tbl => {
            tbl.increments('studentId')
            .primary()
            
            tbl.string('studentFirst', 255)
            .notNullable()
            
            
            tbl.string('studentLast', 255)
            .notNullable()
            
            
            tbl.string('student_email')
            
            tbl.integer('auth_id')
                .defaultTo('0')
        })
        
        // Administrator's Table
        .createTable('admin', tbl => {
            tbl.integer('admin_id')
            .primary()
            .unique()
            
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
                .defaultTo(false)
            
            tbl.string('country', 4)
            
            tbl.string('available_time')
        })
        
        
        
            //Tasks table
        .createTable('task', tbl => {
            tbl.increments('task_id')
            tbl.string('task_name')
            tbl.integer('created_by')
            .references('admin_id')
            .inTable('admin')
                
            tbl.integer('assigned_to')
            .references('id')
            .inTable('volunteer')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
                
            tbl.string('description')
            tbl.string('due_date')
            tbl.boolean('completed')
            .defaultTo(false)
                
        })
            // Secondary Role Table
            .createTable('role', table => {
                table.increments('role_id')
                    .notNullable()
                    .unique()
                    .primary()
    
                
                table.integer('user_id')
                    .references('user_id')
                    .inTable('users')
    
                table.string('role', 255)
               
    
                table.integer('volunteer_id')
                    .references('id')
                    .inTable('volunteer')
                    
                table.integer('student_id')
                    .references('studentId')
                    .inTable('student')
    
                table.integer('administrator_id')
                    .references('admin_id')
                    .inTable('admin')
                    
            })
            
        }; 
        
        exports.down = function(knex) {
    knex.schema.dropTableIfExists('role')
    knex.schema.dropTableIfExists('task')
    knex.schema.dropTableIfExists('user_role')
    knex.schema.dropTableIfExists('volunteer')
    knex.schema.dropTableIfExists('admin')
    knex.schema.dropTableIfExists('student')
    knex.schema.dropTableIfExists('users')
};

