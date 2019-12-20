

const express = require('express')
const router = express.Router() 

// localhost:3000/movies/comedy 
// localhost:3000/movies/cat
// localhost:3000/movies/fiction
// localhost:3000/movies/action 

router.get('/',(req,res) => {

    /*
    let message = ""

    let movies = ["batman"] 
    if(movies.length == 0) {
        message = "No movies available"
    }  */

    // node --inspect-brk index.js
    // chrome://inspect  

    res.render('movies',{cartCount: req.session.cartCount})
})

router.get('/:genre/:year',(req,res) => {
    console.log(req.params)
    res.send(req.params.genre)
})

router.get('/search',(req,res) => {
    console.log(req.session.counter)
   //const searchTerm = req.query.k
   //const age = req.query.age 
   res.send("SEARCH")
   //res.send(searchTerm + age)
})

module.exports = router

