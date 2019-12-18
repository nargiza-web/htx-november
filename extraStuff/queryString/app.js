const express = require('express');
const app = express()
const PORT = 3022

// app.get('/movies', (req, res) => {
//   console.log(req.query.sort)
//   console.log(req.query.page)
//   res.send("[Movies]")
// })

app.get('/movies', (req, res) => {
  
  let movies = [
    {title: "Lord of the Rings", year: 2014},
    {title: "Spiderman", year: 2018},
    {title: "Black Sheet", year: 1997}
  ]
  let movie = {
    title: "Lord of the Rings", year: 2014
  }
  
  res.json(movies)
  //res.send("Movies")
})

app.listen(PORT, () => {
  console.log("Server is running on PORT " + PORT)
})