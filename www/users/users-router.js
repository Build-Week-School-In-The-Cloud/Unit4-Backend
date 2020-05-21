const router = require('express').Router();

const Users = require('./users-model');

router.get('/', (req, res) => {
    Users.find()
        .then(user => {
            res.status(200).json(user)
        }).catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;
