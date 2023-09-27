const express = require('express')

function authenticateToken(req, res, next) {
    // Bearer TOKEN
    const authHeader = req.header['authorization']
    const token = authHeader && authHeader.split('')[1]
    if (token == null) {
        return res.status(401).send()
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).send()
        req.user = user
        next()
    })
}
module.exports = {
    authenticateToken
}