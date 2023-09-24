const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 3000
const app = express()
const routes = require('./routes/index')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/', routes)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})