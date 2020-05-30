require('dotenv').config()
const express = require('express')
const path = require('path')
const restrict = require('../auth/auth-auth_middleware')
const studentRouter = require('../www/students/student-router')
const adminRouter = require('../www/admins/admin-router')
const userRouter = require('../www/users/users-router')
const taskRouter = require('../www/tasks/task-router')
const volunteerRouter = require('../www/volunteers/volunteers-router')
// const authRouter = require('../auth/auth-router')
const server = express();
server.use(express.urlencoded({ extended: true}))

server.use(express.json())
// server.use('/api/register', authRouter);
server.use('/api/admin', adminRouter);
server.use('/api/users', userRouter);
server.use('/api/admin/tasks', taskRouter)
server.use('/api/volunteer/:id/tasks', volunteerRouter)
server.use('/api/student/view', studentRouter)

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');


server.get('/api', restrict, (req,res) => {
   res.status(403).json({page: "Login Portal"})
});


server.get('/api/volunteer', (req, res) => {
    res.status(200).json({page: 'Volunteer Portal'})
});

server.get('/api/student', (req, res) => {
    res.status(200).json({page: 'Student Portal'})
});



server.get('/', (req, res) => {
    res.status(200).json({page: 'Welcome to School In The Cloud'})
});

module.exports = server;
