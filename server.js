const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

const app = express()
const movieRoute = require('./routes/movies')
const mainRoute = require('./routes/main')
const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Methods', "*")
    next()
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(allowCrossDomain)
app.use('/movies', movieRoute)
app.use('/', mainRoute)

mongoose.connect(
    process.env.DB_ACCESS, 
    { useNewUrlParser: true },
    () => { console.log("database is connected")
})

app.listen(3012, console.log("server is running on localhost:3012"))
