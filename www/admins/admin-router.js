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
    Admin.add(newAdmin)
        .then( admin => {
            res.status(201).json(admin)
        }).catch(err => {
            res.status(500).json({message: 'Failed to create new admin'})
        })
});

// router.get('/:id', async (req, res) => {
//     try {
//         const id = Number(req.params.id)
//         const admin = await Admins.findById()
//         res.status(200).json(admin.id)
//     } catch(err) {
//         res.json(err)
//     }

// })

module.exports = router;
