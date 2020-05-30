const router = require('express').Router();

const Volunteer = require('./student-model');
const Student = require('./student-model')
router.get('/', (req, res) => {
    Volunteer.find()
        .then(user => {
            res.status(200).json(user)
        }).catch(err => {
            res.json(err)
        })
})

router.get('/list', (req, res) => {
Student.findStudent()
    .then(student => {
        res.status(200).json(student)
    }).catch(err => {
        res.json(err)
    })

})

module.exports = router;