//
//
const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 3001
const app = express()
const routes = require('./routes/index')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


app.use(express.json())
app.use(cors())
app.use('/api', routes)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})