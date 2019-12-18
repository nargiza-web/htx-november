const express = require('express');
const app = express();
const PORT = 3019;
const mustacheExpress = require('mustache-express');

let trips = [];

// function remove(obj){
//   let li = obj.parentElement
//   trips.removeChild(li)
// }

app.engine('mustache', mustacheExpress())
app.use(express.urlencoded())
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', (req, res) => {
  console.log("I am root")
})
app.get('/add-trip', (req, res) => {
  res.render('index', {trips:trips})
})

app.delete('/delete-trip', (req, res) => {
   req.body.name
  //trips.removeChild(name)
})

app.post('/add-trip', (req, res) => {
let title = req.body.myTitle
let departure = req.body.myDeparture
let theReturn = req.body.myReturn
 //console.log(title, departure);
 
//  let trips =[{title: title, departure: departure, return: theReturn }];
 trips.push(req.body)
 console.log(trips);
 res.send("Success!!! Your trips posted ")
 
})

app.listen(PORT, (req, res) =>{
  console.log("Listening to PORT ", PORT)
})