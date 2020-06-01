exports.up = function(knex) {
    return knex.schema

    //TODO: users table should consider input from registration form 
        //Primary User's table
        .createTable('users', users => {
            users.increments('user_id')
                .notNullable()
                .primary()

            users.integer('age')
                .notNullable()

            users.string('first_name', 255)
                .notNullable()

            users.string('last_name', 255)


            users.string('username', 255)
                .notNullable()
                .unique()

            users.string('password', 255)
                .notNullable();

            users.boolean('logged_in')
                .defaultTo(false)

            users.string('role', 255)
                .notNullable()

            users.string('email_address', 255)
                .unique()

            users.string('address', 255)
                .defaultTo('214 S. Cloud Street')

        })

        
        // Student's Table
        .createTable('student', tbl => {
            tbl.integer('studentId')
            .primary()
            .unique()
            
            tbl.string('studentFirst', 255)
            .notNullable()
            
            
            tbl.string('studentLast', 255)
            .notNullable()
            
            
            tbl.string('student_email')
                .unique()


            tbl.integer('age')

            tbl.string('country_id', 4)
            
            tbl.integer('auth_id')
                .defaultTo('3')
        })
        
        // Administrator's Table
        .createTable('admin', tbl => {
            tbl.increments('admin_id')
            .primary()
            
            tbl.string('adminFirst')
            .notNullable()
            
            tbl.string('adminLast')
            .notNullable()
            
            tbl.integer('auth_id')
            .defaultTo('1')
            
            tbl.text('email')
                .unique()
           
        })
        
        // Volunteer Table
        .createTable('volunteer', tbl => {
            tbl.increments('volunteer_id')
            .primary()
            
            tbl.string('volunteer_firstName')
            .notNullable()
            
            tbl.string('volunteer_lastName')
            .notNullable()
            
            tbl.integer('auth_id')
            .defaultTo('2')

            tbl.string('email', 255)
                .unique()
            
            
            tbl.boolean('on_line')
                .defaultTo(false)
            
            tbl.string('country', 4)
            
            tbl.date('available_time')
                .defaultTo(Date.now())
        })
        
        
        
            //Tasks table
        .createTable('task', tbl => {
            tbl.increments('task_id')
                .primary()

            tbl.string('task_name')
                .notNullable()
            tbl.integer('created_by')
            .references('admin_id')
            .inTable('admin')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
                    
            tbl.integer('assigned_to')
            .references('id')
            .inTable('volunteer')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
                
            tbl.string('description')

            tbl.date('due_date')
            .defaultTo(Date.now())

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
                    .references('auth_id')
                    .inTable('volunteer')
                    
                table.integer('student_id')
                    .references('auth_id')
                    .inTable('student')
    
                table.integer('administrator_id')
                    .references('auth_id')
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

