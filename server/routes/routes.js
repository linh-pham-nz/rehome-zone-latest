const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/api/v1/cats', (req, res) => {
  db.getCats().then (results => {
    res.json(results)
  })
})

router.get('/api/v1/cats/:id', (req, res) => {
  db.getChosenDbCat(req.params.id).then (results => {
    res.json(results)
  })
})

router.post('/PostNewCat', (req, res) => {
  db.postCatData(req.body)
  .then(() => {
    res.status(201).send('')
  })
})
module.exports = router
