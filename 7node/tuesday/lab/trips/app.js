const express = require('express');
const app = express();
const PORT = 3019;
const mustacheExpress = require('mustache-express');

let trips = [];

app.engine('mustache', mustacheExpress())
app.use(express.urlencoded())
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', (req, res) => {
  res.render('index', {trips: trips})
})
app.get('/add-trip', (req, res) => {
  res.render('index', {trips: trips})
})

app.post('/delete-trip', (req, res) => {
  let city = req.body.city 
  trips = trips.filter(trip => trip.myTitle!= city)
  res.redirect('/')
})

app.post('/add-trip', (req, res) => {
 trips.push(req.body)
 res.redirect('/')
})

app.listen(PORT, (req, res) =>{
  console.log("Listening to PORT ", PORT)
})