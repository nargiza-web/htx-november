const express = require('express')
const router = express.Router()

global.uuidv4 = require('uuid/v4')


router.get('/', (req, res) => {
  res.render('index', {movies: allMovies})
})

router.get('/:movieId', (req, res) => {
  const movie = allMovies.filter( m => m.movieId == req.params.movieId)
  res.render('details', {movie: movie})
})

router.get('/genre/:genre', (req, res) => {
  let filtered_movies = allMovies.filter( movie =>movie.genre == req.params.genre)
  res.render('index', {movies: filtered_movies})
})

router.post('/create', (req, res) => {
  let movie = {
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
    url: req.body.url
    //movieId: uuidv4();
  }
  allMovies.push(movie)
  res.redirect("/movies")
})

router.post('/delete', (req, res) => {
  let theName = req.body.theName
  //console.log(theName)
  allMovies = allMovies.filter( movie => movie.title != theName)
  //console.log(allMovies)
  res.redirect("/movies")
})
module.exports = router