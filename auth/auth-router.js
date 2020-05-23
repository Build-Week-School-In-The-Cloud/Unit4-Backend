const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../www/users/users-model')

const jwt = require('jsonwebtoken');
const secrets = require('')
// const restricted = require('../auth/auth-auth_middleware')

const router = express.Router();

function genToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        //roleId: user.role_id
        //other....
    }

    const options = {
        expiresIn: "3h"
    }

    return jwt.sign(payload, secrets.jwtSecret, options)
}

router.post('/register', async (req, res, next) => {
    const {username, role, password} = req.body;

    try {
        const salt = await bcrypt.genSalt(12);
        const hashPass = await bcrypt.hash(password, salt);

        const newUser = await Users.add({
            username,
            role: req.body.role,
            password: hashPass
        });

        res.status(201).json(newUser);

    } catch(err) {
        res.status(500).json({error: 'Internal Server Error'})
    }
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    console.log({username, password})
    User.findBy({username})
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = genToken(user)
                res.status(200).json({ message: `Welcome ${user.username}!`, token: token});
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        }).catch(err => {
            res.status(500).json(err)
        })
})




module.exports = router;