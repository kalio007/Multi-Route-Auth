const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth')
//import the neccessary controller
const {
    post,
} = require('../controllers/post')




//decalre all routes for the collection
router.get('/', authenticateToken, post);


module.exports = router;