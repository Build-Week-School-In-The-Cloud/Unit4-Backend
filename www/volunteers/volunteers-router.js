const router = require('express').Router();

const Task = require('../tasks/tasks-model');
const Vol = require('../volunteers/volunteers-model')

router.get('/tasks/:task_id', (req, res) => {
    const {task_id} = Number(req.params)
    res.status(200).json({message: 'got it'})
})

router.get('/:volunteer_id', async (req, res, next) => {

    try {
        const { volunteer_id } = req.params
            const volunteer = await Vol.findByTask(volunteer_id)
    
            if (volunteer) {
                res.status(200).json(volunteer)
            } else {
                res.status(404).json({message: 'Cannot find volunteer by that Id!'})
            }

    } catch(err) {
         next(err)

        }    
})

module.exports = router;