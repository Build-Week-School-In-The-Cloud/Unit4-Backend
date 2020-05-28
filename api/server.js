require("dotenv").config();

const cors = require("cors");
const helmet = require('helmet')
// const db = require('../connect')

const bodyParser = require("body-parser");
const session = require("express-session");

const express = require("express");
const path = require("path");

const restrict = require("../auth/auth-auth_middleware");
const studentRouter = require("../www/students/student-router");
const studentView = require("../www/students/student-router");
const adminRouter = require("../www/admins/admin-router");
const userRouter = require("../www/users/users-router");
const taskRouter = require("../www/tasks/task-router");
const volunteerRouter = require("../www/volunteers/volunteers-router");
const authRouter = require("../auth/auth-router");


const server = express();
server.use(helmet())
server.use(express.json());
// server.use('/api/user', authRouter);

server.use(
  cors({
    origin: "*",
    methods: "POST",
  })
);

//auth for register and login
server.use("/api", authRouter);

server.use("/api/admin", adminRouter);
server.use("/api/users", userRouter);
server.use("/api/admin/tasks", taskRouter);
server.use("/api/volunteer/:id/tasks", volunteerRouter);
server.use("/api/student/view", studentRouter);
server.use("/api/volunteers/", studentRouter);
server.use("/api/students/", studentView);

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "pug");

server.get("/api/volunteer", (req, res) => {
  res.status(200).json({ page: "Volunteer Portal" });
});

server.get("/api/student", (req, res) => {
  res.status(200).json({ page: "Student Portal" });
});

server.get("/", (req, res) => {
  res.status(200).json({ page: "Welcome to School In The Cloud" });
});


//testing
// server.get("/api/user", (req, res, next) => {
//   var sql = "select * from user"
//   var params = []
//   db.all(sql, params, (err, rows) => {
//       if (err) {
//         res.status(400).json({"error":err.message});
//         return;
//       } 
//       res.json({
//           "message":"success",
//           "data":rows
//       })
//     });
// });

module.exports = server;
