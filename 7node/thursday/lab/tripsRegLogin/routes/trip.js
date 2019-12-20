const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('trip', {trips: trips})
})

router.get('/add-trip', (req, res) => {
  res.send("OK")
})
router.post('/add-trip', (req, res) => {
  let trip = { title: req.body.title, departure: req.body.departure, myReturn: req.body.myReturn, url: req.body.url}
  trips.push(trip)
  res.redirect('/trip')
})

router.post('/delete-trip', (req, res) => {
  let city = req.body.city
  trips = trips.filter( t => t.title != city)
  res.redirect('/trip')
})
module.exports = router