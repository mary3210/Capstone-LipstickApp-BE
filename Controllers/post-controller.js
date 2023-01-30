const express = require('express')
const router = express.Router()

const { Post } = require('../models')

const db = require('../models')

console.log(Post)

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.find({})
        res.status(200).json(allPosts)
    } catch (err) {
        res.status(400).json({ error: err})
    }
})

    router.post('/', async (req, res) => {
        console.log(req.body)
        try{
            const newPost = await Post.create(req.body)
            res.status(201).json(newPost)
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    })

    router.get('/id', async (req, res) => {
        try {
            const foundPost = await Post.findById(req.params.id)
        } catch (err) {
            res.status(400).json({ error: err })
        }
    })

    router.put('/:id', async (req, res) => {
        try {
    
            const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200).json(updatedPost)
    
        } catch (err) {
            res.status(400).json({ error: err })
        }
    })

    router.delete('/:id', async (req, res) => {
        try {
            const deletedPost = await Post.findByIdAndDelete(req.params.id)
            res.status(200).json(deletedPost)
    
        } catch (err) {
            res.status(400).json({ error: err })
        }
    })
    
    module.exports = router 