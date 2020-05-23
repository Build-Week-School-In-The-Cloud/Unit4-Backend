// const express = require('express')
// const TaskModel = require('../volunteers/volunteers-model')

// const router = express.Router()

// router.get(`/:id`, (req, res) => {

//         const id = Number(req.params.id)
//         const getTask = TaskModel.find((task) => {
//             task.id === id

//             if (!getTask) {
//                 res.status(500).json({error: 'No tasks found'})
//             } else {

//                 res.status(200).json(getTask)
//             }
//         })
// })

// module.exports = router;