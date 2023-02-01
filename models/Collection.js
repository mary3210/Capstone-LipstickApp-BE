const mongoose = require('mongoose')

const CollectionSchema = new mongoose.Schema({
    name: {type: String, required: true},
    posts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Post',
        
    }]
    
})

const Collection = mongoose.model("Collection", CollectionSchema)

module.exports = Collection