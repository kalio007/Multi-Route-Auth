const express = require('express');
const router = express.Router();
const { landing, verify } = require('../controllers/login');

router.get('/', landing)
router.post('/user', verify)

module.exports = router;