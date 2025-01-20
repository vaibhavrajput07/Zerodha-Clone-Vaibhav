const { Signup, Login } = require('../Controllers/AuthControllers');
const{userVerification}=require("../middleware/authMiddleware");
const router = require('express').Router()

router.post('/',userVerification)
router.post('/signup', Signup)
router.post('/login', Login)

module.exports = router