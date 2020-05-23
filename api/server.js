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
// server.use('/api/login', authRouter);
server.use('/api/admin', adminRouter);
server.use('/api/users', userRouter);
server.use('/api/admin/tasks', taskRouter)
server.use('/api/volunteer/:id/tasks', volunteerRouter)
server.use('/api/student/view', studentRouter)

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

server.use('/api/about', express.static('index'))


server.get('/api', restrict, (req,res) => {
   res.status(403).json({api: "testing the api"})
});


server.get('/api/volunteer', (req, res) => {
    res.status(200).send('<p>Volunteer Page</p>')
});

server.get('/api/student', (req, res) => {
    res.status(200).send('<p>Student Page </p>')
});



server.get('/', (req, res) => {
    res.status(200).send('<p>Welcome to SITC!</p>')
});

module.exports = server;
