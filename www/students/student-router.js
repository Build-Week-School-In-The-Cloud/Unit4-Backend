const router = require('express').Router();

const Student = require('./student-model');

router.get('/', async  (req, res, next) => {
    try {
        const volunteers = await Student.findVolunteers()
        res.status(200).json(volunteers)

    } catch (err) {
        next(err)
    }
    
})

router.get('/list', (req, res) => {
    Student.findStudent()
    .then(student => {
        res.status(200).json(student)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/search', (req, res) => {
    Student.findBy(req.body)
        .then(volunteer => {
            res.status(200).json(volunteer)
        }).catch(err => {
            res.json(err)
        })
})

module.exports = router;