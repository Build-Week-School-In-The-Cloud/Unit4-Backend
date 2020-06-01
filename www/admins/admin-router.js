const router = require('express').Router();

const Admins = require('./admins-model');
const Tasks = require('../tasks/tasks-model')

router.get('/', async (req, res, next) => {
    try {
        const admin = await Admins.find()
        res.status(200).json(admin)
    } catch(err) {
        next(err)
    }
    
})

router.get('/tasks', async (req, res, next) => {
    try {
        const taskList = await Tasks.find()
        res.status(200).json(taskList)

    } catch(err) {
        next(err)
    }
    
})

router.get('/tasks/:task_id', async (req, res, next) => {

    try {
        const { task_id } = req.params
            const task = await Tasks.findById(task_id)
    
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
    const newAdmin = req.body;
    Admins.add(newAdmin)
        .then( admin => {
            res.status(201).json(admin)
        }).catch(err => {
            res.status(500).json({message: 'Failed to create new admin'})
        })
});

module.exports = router;
