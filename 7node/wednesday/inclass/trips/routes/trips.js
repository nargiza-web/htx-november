
const express = require('express')
const router = express.Router() 


// localhost:3000/trips/
router.get('/',(req,res) => {
    res.render('index',{trips: trips})
})

// localhost:3000/trips/delete-trip
router.post("/delete-trip",(req,res) => {
    let city = req.body.city 
    // remove the trip based on the city name
    trips = trips.filter(trip => trip.title != city)
    // re render the trip list 
    res.redirect("/trips")
})

// localhost:3000/trips/add-trip
router.post("/add-trip", (req, res) => {
    let trip = {title: req.body.title, cost: req.body.cost}
    trips.push(trip)
    console.log(trips)
    res.redirect("/trips")
})

module.exports = router 
