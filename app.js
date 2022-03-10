const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://sjpander:1234567890@cluster0.s79ez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

mongoose.connect(url, { useNewUrlParser: true })

const con = mongoose.connection

con.on('open', function () {
    console.log('connected to database')
})

app.use(express.json())

const studentsRouter = require('./routes/students')
app.use('/students', studentsRouter)

app.listen(9000, function () {
    console.log('Server Started')
})