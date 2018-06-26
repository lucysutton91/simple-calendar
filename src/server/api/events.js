const router = require('express').Router()
const { Event } = require('../db/models')

router.get('/events', (req, res, next) => {
  Event.findAll()
  .then(events => {
    res.json(events)
  })
  .catch(next)
})

module.exports = router

