const express = require('express');
const router = express.Router();
const { landing, verify, token } = require('../controllers/login');

router.get('/', landing)
router.post('/user', verify)
router.post('/verify-token', token)

module.exports = router;