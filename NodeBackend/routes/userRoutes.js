const express = require('express')
const router = express.Router()

router.route('/').post(regiserUser)
// router.post('/login',authUser)

module.exports = router