const express = require('express')
const TaskModel = require('../volunteers/volunteers-model')

const router = express.Router()

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const task = await TaskModel.findById()

        res.status(200).json(task)


    } catch (err) {
        next(err)
    }
})