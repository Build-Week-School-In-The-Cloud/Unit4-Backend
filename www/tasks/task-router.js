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

router.get('/:task_id', async (req, res, next) => {
    try {
        const { task_id } = req.params
        const task = await Task.findById(task_id)

        if (task) {
            res.status(200).json(task)
        } else {
            res.status(404).json({message: 'Cannot find task by that Id!'})
        }

    } catch(err) {
        next(err)
    }
})

router.post('/', (req, res) => {
    const {newTask} = req.body;
    Task.add(newTask)
        .then( task => {
            res.status(201).json(task)
        }).catch(err => {
            res.status(201).json({message: err})
        })
});

module.exports = router;