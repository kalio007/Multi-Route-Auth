// we use the models and route application here
const express = require('express');
const bcrypt = require('bcrypt')
require('dotenv').config();
const jwt = require('jsonwebtoken')


const landing = async (req, res) => {
    try {

        return res.status(200).json("hey")
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const users = []

const verify = async (req, res) => {
    try {
        // create a salt first
        // const salt = await bcrypt.genSalt()
        //add salt to the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        // console.log(salt)
        console.log(hashedPassword)
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    } catch (error) {
        res.status(500).send()
    }
}

const findUser = async (req, res) => {
    //assuming User is the schema from the schema
    // CHORE: add the database
    const user = await User.find(user => user.name = req.body.name)
    if (user === null) {
        return res.status(400).send("cannot find user")
    }
    try {
        //compare the password for auth
        if (await brcrypt.compare(req.body.password, user.password)) {
            res.send("success")
        } else {
            res.send('Not allowed')
        }
    } catch (error) {

    }
}
const token = async (req, res) => {
    const username = req.body.username
    const user = { name: username }
    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    res.json({ accessToken: accessToken, refreshToken: refreshToken })

}

function generateAccessToken(user) {
    return accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10mins' })
}

module.exports = {
    landing,
    verify,
    findUser,
    token
}
