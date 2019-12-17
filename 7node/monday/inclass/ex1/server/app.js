const express = require("express");
console.log("Hello server! ")
const app = express();
console.log(app);

// GET
app.get('/hello', (req, res) => {
  res.send("Hello Alex!")
})

app.get('/movies', (req, res) => {
  res.json([{
    title: "Dabka",
    year: 1990,
  },
{
  title: "Digital",
  year: 2019
},
{
  title: "cooking",
  year: 2015
}
])
})
// start the server
app.listen(3000, () => {
  console.log("server is running on PORT 3000")
})