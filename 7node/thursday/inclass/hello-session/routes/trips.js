
// /trips/???? - prefex 

const express = require('express')
const router = express.Router() 

// localhost:3000/trips
router.get("/",(req,res) => {
    res.send("/")
})

// /trips/add-trip
router.get("/add-trip",(req,res) => {
    res.send("add-trip")
})

module.exports = router 