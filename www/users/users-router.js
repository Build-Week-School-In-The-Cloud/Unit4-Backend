const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../../config/secrets');

const restricted = require('../../auth/auth-auth_middleware')



const Users = require('./users-model');

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    }

    const options = {
        expiresIn: "3d",
    }
}
router.get('/', (req, res) => {
    Users.find()
        .then(user => {
            res.status(200).json(user)
        }).catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;
