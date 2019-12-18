const express = require('express')
const app = express();
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())

app.set('views', './views')

app.set('view engine', 'mustache')

app.get('/', (req, res) => {
  
  let names = [{name: "John"}, {name: "Mary"}]
  res.render('index', {names: names})
})

app.listen(3008,()=> {
  console.log("Server is running....")
} )