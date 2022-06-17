const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const router = require('./routes/user.router')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use('/user',router)

app.listen(process.env.PORT, ()=>{
    console.log("Connected to the server IP: 8080")
})

app.set('secretKey','ahdshdhfjss')


mongoose.connect(process.env.MONGOURI)
.then(()=>{
    console.log("Connected to the Database payroll")
})
.catch((error)=>{
    console.log("Error connecting to database")
})