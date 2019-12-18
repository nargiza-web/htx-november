const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3571;

app.use(cors())
app.get('/', (req, res) => {
  res.send("Hello")
})

app.post('/', (req, res) => {
  console.log(req.body)
})

app.listen(PORT, () => {
  console.log("Listening to PORT : ", PORT)
})