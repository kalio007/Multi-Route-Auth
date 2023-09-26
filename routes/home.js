const express = require('express');
const router = express.Router();



//import the neccessary controller
const {
    helloworld
} = require('../controllers/home')

//decalre all route for the collection
router.get('/', helloworld);



module.exports = router;
