const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const Movie = require('../models/Movie')

const router = express.Router()
const upload = multer()

router.get('/', async (req, res) => {
    try {
        if (req.query.sort_direction === 'asc') {
            const movies = await Movie.find().sort({ title: 1 })
            res.status(200).json({
            message: "status ok",
            movies: movies
        })
        } 
        if (req.query.sort_direction === 'desc') {
            const movies = await Movie.find().sort({ title: -1 })
            res.status(200).json({
            message: "status ok",
            movies: movies
        })
        } 
    } catch(err) {
        res.status(500).json({
            message: err
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        res.status(200).json({
            message: "status ok",
            movie: movie
        })
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }   
})

router.post('/', upload.none(), async (req, res) => {
    const movieItem = new Movie({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        releaseYear: req.body.releaseYear,
        format: req.body.format,
        stars: req.body.stars 
    })
    try {
        const movie = await movieItem.save()
        res.status(201).json(
            {
                message: "status ok",
                movie: movie
            }
        )
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const removeMovie = await Movie.deleteOne({_id: req.params.id})
        res.status(200).json(removeMovie)
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
})

module.exports = router

// convert TXT to JSON

// const fs = require('fs')
// const converter = fs.readFile('sample.txt', (err, data) => {
//     if (err) throw err
//     let title = data.toString()
//     title = title.split(/[\r\n]/)
//     let txt = []
//     for (let i = 0; i < title.length; i++) {
//         if (title[i] === '') continue 
//             txt.push(title[i])
//     }
//     const arr = []
//     const result = {}

//     txt.map(line => {
//         let key = line.split(/[: '']/)[0].toLowerCase()
//         let value = line.split(':')[1]
//         result[key] = value
//         arr.push(result)

//     })
// })
