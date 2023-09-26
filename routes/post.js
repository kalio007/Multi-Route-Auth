const express = require('express');
const router = express.Router();



//import the neccessary controller
const {
    post,
    login
} = require('../controllers/post')

//decalre all route for the collection
router.get('/', post);
router.post('/login', login)



module.exports = router;
