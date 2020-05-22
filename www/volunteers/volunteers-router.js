const router = require('express').Router();

const Task = require('../tasks/tasks-model');

router.get('/', (req, res) => {
    Task.find()
        .then(tasks => {
            res.status(200).json(tasks)
        }).catch(err => {
            res.json(err)
        })
})

router.put('/', (req, res) => {
    //configure to edit boolean toggle

})

module.exports = router;