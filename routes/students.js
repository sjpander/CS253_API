const express = require('express')
const router = express.Router()

const Student = require('../models/student')

router.post('/change', async (req, res) => {
    data = req.body
    console.log(data)
    console.log(data["UID"])
    // data=JSON.parse(data)
    try {
        const student = await Student.find({ "UID": data["UID"] })
        // for (entry in data) {
        //     student[0][entry] = data[entry]
        // }
        console.log(student)
        const a1 = await student[0].save()
        res.json(a1)
        //res.end("Ok")  
    } catch (err) {
        console.log(err)
        res.send('Error')
    }
})

router.post('/', async (req, res) => {
    console.log(req.body.UID)
    const student = new Student({
        Name: req.body.Name,
        UID: req.body.UID,
        BloodGroup: req.body.BloodGroup,
        Age: req.body.Age,
        Gender: req.body.Gender,
        ContactNumber: req.body.ContactNumber,
        EmergencyContactName: req.body.EmergencyContactName,
        EmergencyContactNumber: req.body.EmergencyContactNumber,
        Allergies: req.body.Allergies,
        Address: req.body.Address
    })
    console.log(student)
    try {
        const a1 = await student.save()
        res.json(a1)
    } catch (err) {
        console.log(err)
        res.send('Error')
    }
})

module.exports = router

// router.get('/', async (req, res) => {
//     try {
//         const students = await Student.find()
//         res.json(aliens)
//     } catch (err) {
//         res.send('Error' + err)
//     }
// })

// router.get('/:id', async (req, res) => {
//     try {
//         const alien = await Alien.findById(req.params.id)
//         res.json(alien)
//     } catch (err) {
//         res.send('Error' + err)
//     }
// })
// {
// "id":"jn"
//     "contact":0123456789,
//     "emergency_name":"0123456789",
//     "emergency_contact":0123456789,
//     "history":"u r completelu fine!",
//     "allergies":"none",
//     "address":"jnvdk"
// }

// router.patch('/:id', async (req, res) => {
//     try {
//         const alien = await Alien.findById(req.params.id)
//         alien.sub = req.body.sub
//         const a1 = await alien.save()
//         res.json(a1)
//     } catch (err) {
//         res.send(err)
//     }
// })
