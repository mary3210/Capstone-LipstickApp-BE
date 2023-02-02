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

router.post('/', async (req, res) => {
    console.log(req.body)
    try{
        const newCollection = await Collection.create(req.body)
        res.status(201).json(newCollection)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const foundCollection = await Collection.findById(req.params.id).populate("posts")
        res.status(200).json(foundCollection)
    } catch (err) {
        res.status(400).json({ error: err })
    }
})

router.put('/:id', async (req, res) => {
    try {

        const updatedCollection = await Collection.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedCollection)

    } catch (err) {
        res.status(400).json({ error: err })
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const deletedCollection = await Post.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedCollection)

    } catch (err) {
        res.status(400).json({ error: err })
    }
})


module.exports = router