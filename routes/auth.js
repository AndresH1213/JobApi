const express = require('express')
const router = express.Router()

const { 
    register, 
    login 
} = require('../controllers/auth')

// parent route hostdomain/api/v1/auth/

router.post('/register', register)

router.post('/login', login)

module.exports = router
