const express = require('express');
const router = express.Router();
const getUserController = require('../controllers/userController')

router.get('/estudiantes', getUserController);

module.exports = router