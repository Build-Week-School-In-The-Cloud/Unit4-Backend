const router = require('express').Router();

const Admins = require('./admins-model');

router.get('/', (req, res) => {
    Admins.find()
        .then(users => {
            res.status(200).json(users)
        }).catch(err => {
            res.json(err)
        })
})

router.post('/', (req, res) => {
    const newAdmin = req.body;
    Admins.add(newAdmin)
        .then( admin => {
            res.status(201).json(admin)
        }).catch(err => {
            res.status(500).json({message: 'Failed to create new admin'})
        })
});

module.exports = router;
