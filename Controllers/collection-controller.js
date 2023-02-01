const express = require('express')
const router = express.Router()
const { Post } = require('../models')
const { Collection } = require('../models')
const db = require('../models')

router.get('/', async (req, res) => {
    try {
        console.log('a')
        const allCollection = await Collection.find({})
        res.status(200).json(allCollection)
    } catch (err) {
        res.status(400).json({ error: err})
    }
})
module.exports = router