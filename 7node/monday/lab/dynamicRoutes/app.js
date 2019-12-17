const express = require('express');
const app = express();
const PORT = 3067;

app.get('/', (req, res) => {
  res.send("Hello Express!")
})

app.get('/movies', (req, res) => {
  res.send("[Movies]")
})

// /movies/comedy/year/2012
// /movies/action/year/2019
/*
app.get('/movies/:genre/year/:year', (req, res) => {
  console.log(req.params.genre)
  console.log(req.params.year)
  res.send("Movies Route")
})
*/
// movies/genre/year/passyear
/*
app.get('/movies/comedy/year/1992', (req, res) => {
  res.send("Comedy Movies")
})

app.get('/movies/romance', (req, res) => {
  res.send("Romance Movies")
})

app.get('/movies/action', (req, res) => {
  res.send("Action Movies")
})
*/
/*
app.get('/movies/year', (req, res) => {
  res.send("Movies/ Year")
})
*/

app.listen(PORT, () => {
  console.log("Server is running on PORT " + PORT)
});