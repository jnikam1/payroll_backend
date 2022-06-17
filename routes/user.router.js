const express = require('express')
const router = express.Router()
const controller = require('../controller/user.controller')

// Create User
router.post('/create',controller.create)


// Login USer
router.post('/login',controller.login)

module.exports = router