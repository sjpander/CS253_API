const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({

    "Patient_Name": {
        type: String,
        required: true
    },
    "Patient_ID": {
        type: String,
        required: true
    },
    "Blood_Group": {
        type: Boolean,
        required: true,
        default: false
    },
    "Patient_Contact_Number": {
        type: String,
        required: true
    },
    "Name_of_Emergency_Contact": {
        type: String,
        required: true
    },
    "Emergency_Contact_Number": {
        type: String,
        required: true
    },
    "Significant_Medical_History": {
        type: String,
        required: true
    },
    "Drug_Allergies": {
        type: String,
        required: true
    },
    "Address": {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Student', studentSchema)