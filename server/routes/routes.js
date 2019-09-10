const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/api/v1/cats', (req, res) => {
  db.getCats().then (results => {
    res.json(results)
  })
})

router.post('/PostNewCat', (req, res) => {
  // console.log("routes", req.body)
  db.postCatData(req.body)
  .then(() => {
    res.status(201).send('')
  })
})
module.exports = router
