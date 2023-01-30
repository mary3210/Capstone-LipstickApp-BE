const mongoose = require('mongoose')

const CollectionSchema = new mongoose.Schema({
    name: {type: String, required: true},
    
})

const Collection = mongoose.model("Collection", CollectionSchema)

module.exports = Collection