const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/Users.js');
const auth = require('../Middleware/Auth');
const multer = require('../Middleware/Multer-config-multiple');

//LOGIN

router.post('/login', usersCtrl.loginUser)

//SIGNUP

router.post('/signup', usersCtrl.signupUser)

//MEASURES

router.post('/measures', auth, usersCtrl.measures)

//MEASURES UPDATE

router.put('/measuresUpdate/:userId', auth, usersCtrl.measuresUpdate)

//MEASURES GET ONE

router.get('/measuresGet/:userId', auth, usersCtrl.measuresGet)



module.exports = router;
