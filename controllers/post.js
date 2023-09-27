// we use the models and route application here
const express = require('express');
const jwt = require('jsonwebtoken')

const upPost = [
    {
        username: 'kalio',
        title: 'post 1'
    },
    {
        username: 'Prince',
        title: 'post 5'
    }
]

const post = async (req, res) => {
    try {
        return res.status(200).json(upPost)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    post,
}
