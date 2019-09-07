const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/api/v1/cats', (req, res) => {
  db.getCats().then (results => {
    res.json(results)
  })
})

module.exports = router
