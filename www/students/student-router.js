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
        const volunteer = await Student.findByCountry(country)

        if (volunteer && country) {
            res.status(200).json(volunteer)
        } else {
            res.status(404).json({ message: 'Cannot find this Volunteer!'})
        }

    } catch(err) {
        next(err)
    }
    
})

router.get('/:available_time', async (req, res, next) => {
    try {
        const {available_time} = req.params
        const volunteer = await Student.findByTime(available_time)

        if (volunteer && available_time) {
            res.status(200).json(volunteer)
        } else {
            res.status(404).json({ message: 'Cannot find this Volunteer!'})
        }

    } catch(err) {
        next(err)
    }
})

router.get('/:email', async (req, res, next) => {
    try {
        const {email} = req.params
        const volunteer = await Student.findByEmail(email)

        if (volunteer && available_time) {
            res.status(200).json(volunteer)
        } else {
            res.status(404).json({ message: 'Cannot find this Volunteer!'})
        }

    } catch(err) {
        next(err)
    }
})

router.get('/:volunteer_id', async (req, res, next) => {
    try {
        const {volunteer_id} = req.params
        const volunteer = await Student.findByVolunteerId(volunteer_id, req.body)

        if (volunteer && volunteer_id) {
            res.status(200).json(volunteer)

        } else {
            res.status(404).json({ message: 'Cannot find volunteer with that ID'})
        }
    } catch(err) {
        next(err)
    }
})

module.exports = router;