const router = require('express').Router();

const Task = require('./tasks-model');

router.get('/', (req, res) => {
    Task.find()
        .then(tasks => {
            res.status(200).json(tasks)
        }).catch(err => {
            res.json(err)
        })
})

router.post('/', (req, res) => {
    const newTask= req.body;
    Task.add(newTask)
        .then( task => {
            res.status(201).json(task)
        }).catch(err => {
            res.status(201).json({message: 'created new task'})
        })
});

module.exports = router;