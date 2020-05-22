const router = require('express').Router();

const Volunteer = require('./student-model');

router.get('/', (req, res) => {
    Volunteer.find()
        .then(user => {
            res.status(200).json(user)
        }).catch(err => {
            res.json(err)
        })
})

module.exports = router;