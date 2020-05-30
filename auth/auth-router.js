const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const Users = require("../www/users/users-model");

const router = express.Router();

const sessionConfig = {
  secret: "school.in.the.cloud",
  name: "sitc",
  httpOnly: true,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 1,
  },
};

router.use(session(sessionConfig));

router.post('/register', (req, res) => {
    let creds = {
        username: req.body.username,
        password: req.body.password
    }

    jwt.sign({creds}, 'jwtSecret', (err, token) => {
        res.status(200).json({Jwt:`Bearer ${token}`})
        if (err) {
            res.status(400).json(err)
        }

    })

});

// router.post("/register", (req, res) => {
  // try {
  // 	const { username } = req.body
  // 	const user = await Users.findBy({ username }).first()

  // 	if (user) {
  // 		return res.status(409).json({
  // 			message: "Username is already taken",
  // 		})
  // 	}

  // 	res.status(201).json(await Users.add(req.body))
  // } catch(err) {
  // 	next(err)
  // }
//   router.post("/login", (req, res) => {
//     res.json({ message: "jwtSecret" });
//   });
// });

router.post("/login", (req, res, next) => {
    let creds = {
        username: req.body.username,
        password: req.body.password
    }

    jwt.sign({creds}, 'jwtSecret', (err, token) => {
        res.status(200).json({Jwt:`Bearer ${token}`})
        if (err) {
            res.status(400).json(err)
        }

    })
  // try {
  // 	const { username, password } = req.body
  // 	const user = await Users.findBy({ username }).first()
  // 	const passwordValid = await bcrypt.compare(password, user.password)
  // 	if (!user || !passwordValid) {
  // 		return res.status(401).json({
  // 			message: "Invalid Credentials",
  // 		})
  // 	}
  // 	const payload = {
  // 		userId: user.user_id,
  // 		userRole: "Student", // this would normally come from a database
  // 	}
  // 	const token = jwt.sign(payload, process.env.JWT_SECRET)
  // 	res.cookie("token", token)
  // 	res.json({
  // 		message: `Welcome ${user.username}!`,
  // 	})
  // } catch(err) {
  // 	next(err)
  // }
});

module.exports = router;
