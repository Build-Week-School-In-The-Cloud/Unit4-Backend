const express = require('express');
const router = express.Router();
const User = require('../www/users/users-model')


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
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
        res.status(500).json(err)
    }
})


module.exports = router;