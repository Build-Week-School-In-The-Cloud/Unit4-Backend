const router = require('express').Router();

const {find, add} = require('./tasks-model');

router.get('/', (req, res) => {
    find()
        .then(tasks => {
            res.status(200).json(tasks)
        }).catch(err => {
            res.json(err)
        })
})

router.post('/', (req, res) => {
    const {newTask} = req.body;
    add(newTask)
        .then( task => {
            res.status(201).json(task)
        }).catch(err => {
            res.status(201).json({message: err})
        })
});

module.exports = router;