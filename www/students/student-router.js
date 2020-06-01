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

router.get('/:country', async (req, res, next) => {
    try {
        const {country} = req.params
        const volunteer = await Student.findBy(country)

        if (volunteer && country) {
            res.status(200).json(volunteer)
        } else {
            res.status(404).json({ message: 'Cannot find this Volunteer!'})
        }

    } catch(err) {
        next(err)
    }
    
})

module.exports = router;