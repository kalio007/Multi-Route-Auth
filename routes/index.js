// on this index we import/require all the routes here
const express = require('express');
const router = express.Router();
// require each below here
const home = require('./home');
const login = require('./login')
const post = require('./post')



//link up all the collections for the project
router.use('/', home);
router.use('/login', login)
router.use('/post', post)

module.exports = router