const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
    {
        image: {type: String, required: true},
        review: { type: String, required: true},
        tags: [String],
        rating: Number,

    }, {timestamps: true}
)

const Post = mongoose.model("Post", PostSchema)

module.exports = Post