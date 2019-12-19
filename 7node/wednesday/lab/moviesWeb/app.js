const express = require('express')
const app = express();
const mustacheExpress = require('mustache-express')
const PORT = 3003;
const moviesRouter = require('./routes/movies')
const path = require('path')
const VIEWS_PATH = path.join(__dirname, '/views')

app.use(express.static('public'))

global.allMovies = [
  { title: "The Help",
    description: "great movie",
    genre: "drama",
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1569852858/amc-cdn/production/2/movies/49100/49085/PosterDynamic/93152.jpg",
    movieId: uuidv4()
  },
  {
    title: "Spiderman",
    description: "nice movie",
    genre: "action",
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1569852858/amc-cdn/production/2/movies/49100/49085/PosterDynamic/93152.jpg",
    movieId: uuidv4()
  },
]
// middleware
app.use(express.urlencoded())
app.use('/movies', moviesRouter)
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')

app.get('/', (req, res) => {
  res.render('index', {movies: allMovies})
})

// Web API send all movies as JSON format
app.get('/api/movies', (req, res) => {
  res.json({movies: allMovies})
})


app.listen(PORT, () => {
  console.log("Server is running on PORT " + PORT + " happy hacking :) ")
})