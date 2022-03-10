const express = require('express')
const router = express.Router()

const Student = require('../models/student')

router.post('/change', async (req, res) => {
    data = req.body
    console.log(data)
    // data=JSON.parse(data)
    try {
        const student = await Student.find({"Patient_ID":data["Patient_ID"]})
        for (entry in data) {
            //if (entry == "Patient ID") continue;
            student[0][entry] = data[entry]
        }
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
    console.log(req.body.Patient_ID)
    const student = new Student({
        "Patient_Name": req.body.Patient_Name,
        "Patient_ID": req.body.Patient_ID,
        "Blood_Group": req.body.Blood_Group,
        "Patient_Contact_Number": req.body.Patient_Contact_Number,
        "Name_of_Emergency_Contact": req.body.Name_of_Emergency_Contact,
        "Emergency_Contact_Number": req.body.Emergency_Contact_Number,
        "Significant_Medical_History": req.body.Significant_Medical_History,
        "Drug_Allergies": req.body.Drug_Allergies,
        "Address": req.body.Address
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
