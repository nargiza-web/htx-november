
const express = require('express')
const cors = require('cors')
const app =  express()

let movies = [] 

// use the cors middleware 
app.use(cors())
// server can now read json body 
app.use(express.json())

app.post('/movies',(req,res) => {
    console.log(req.body) 
    movies.push(req.body)
    res.send('I am POST and I received your request')
})

app.get('/movies',(req,res) => {
    /*
    const movies = [
        {title: "Movie1", year: 2001}, 
        {title: "Movie2", year: 2003}
    ]

    const response = {
        totalResults : 100, 
        search: movies 
    } */

    res.json(movies)
})

// GET 
app.get('/hello',(req,res) => {
    res.json({name: "John"})
    res.send("Hello World")
})

// start the server 
app.listen(3000,() => {
    console.log('Server is running on PORT 3000')
})