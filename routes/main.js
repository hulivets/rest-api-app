const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("add '/movies' in url, to get movies list")
})

module.exports = router