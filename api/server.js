require('dotenv').config()
// const uuid = require('uuid')

const db = require('../config/db-config')
const bodyParser = require('body-parser')
const session = require('express-session')
const Filestore = require('session-file-store') (session)
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const express = require('express')
const path = require('path')
const secret = require('../config/secrets')
const restrict = require('../auth/auth-auth_middleware')
const studentRouter = require('../www/students/student-router')
const studentView = require('../www/students/student-router')
const adminRouter = require('../www/admins/admin-router')
const userRouter = require('../www/users/users-router')
const taskRouter = require('../www/tasks/task-router')
const volunteerRouter = require('../www/volunteers/volunteers-router')
const authRouter = require('../auth/auth-router')


const server = express();
server.use(bodyParser.urlencoded({ extended: false}))
server.use(bodyParser.json())
server.use(express.json())
// server.use('/api/user', authRouter);

// const users = db('users');
// passport.use(new LocalStrategy(
//     {usernameField: 'username'},
//     (password, done) => {
//         const user = users[0]
//         if(username === user.username && password === user.password) {
//             return done(null, user)
//         }
//     }
// ));

// passport.serializeUser((user, done) => {
//     done(null, user.id)
// })
// server.use(session({
//     genid: (req) => {
//         console.log(req.sessionID)
//         return user.uuid()
//     },
//     store: new Filestore(),
//     secret: secret,
//     resave: false,
//     saveUninitialized: true
    
// }))

server.use(passport.initialize())
server.use(passport.session())

server.use('/api', authRouter)
server.use('/api/admin', adminRouter);
server.use('/api/users', userRouter);
server.use('/api/admin/tasks', taskRouter)
server.use('/api/volunteer/:id/tasks', volunteerRouter)
server.use('/api/student/view', studentRouter)
server.use('/api/volunteers/', studentRouter)
server.use('/api/students/', studentView)

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');



server.get('/api/volunteer', (req, res) => {
    res.status(200).json({page: 'Volunteer Portal'})
});

// server.post('/api/login', (req, res, next) => {
//     passport.authenticate('local', (err, user, info) => {
//         req.login(users, (err) => {
//             res.json({message: 'You were authenticated and logged in'})
//         })
//     }) (req, res, next);
// })

server.get('/api/student', (req, res) => {
    res.status(200).json({page: 'Student Portal'})
});


server.get('/', (req, res) => {
    res.status(200).json({page: 'Welcome to School In The Cloud'})
});

module.exports = server;
