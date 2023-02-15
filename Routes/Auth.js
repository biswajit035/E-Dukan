const express = require('express')
const router = express.Router();

const { testing, signup, login, getuser } = require('../controllers/auth');
const { verifyUser } = require('../controllers/verify');





// http://localhost:8020/api/auth/signup
router.post('/signup', signup)

// http://localhost:8020/api/auth/login
router.post('/login', login)

// http://localhost:8020/api/auth/getuser
router.get('/getuser', getuser)

router.get('/test',testing)


module.exports = router