const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({

    Name: String,
    UID: Number,
    BloodGroup: String,
    Age: Number,
    Gender: String,
    ContactNumber: Number,
    EmergencyContactName: String,
    EmergencyContactNumber: Number,
    Allergies: String,
    Address: String
})

module.exports = mongoose.model('Student', studentSchema)