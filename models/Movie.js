const mongoose = require('mongoose')

const MoviesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    releaseYear: Number,
    format: String,
    stars: String
})

module.exports = mongoose.model('Movies', MoviesSchema)