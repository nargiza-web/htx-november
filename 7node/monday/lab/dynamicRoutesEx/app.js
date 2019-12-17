const express = require('express')
const app = express();
const PORT = 3009;

app.get('/', (req, res) => {
  res.send("Books App")
})

app.get('/books/:genre/year/:year', (req, res) => {
  const genre = req.params.genre;
  const year = req.params.year;
  res.send("The book belongs to " + genre + " and was released in " + year )
})

app.listen(PORT, () => {
  console.log("Listening to PORT: ", PORT)
})