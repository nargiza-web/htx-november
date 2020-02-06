// everything has it's own time to be done
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const cors = require('cors')

const users = [{username: 'johndoe', password: 'password'}]

app.use(cors())
app.use(express.json())

app.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  
  const persistedUser = users.find((user) => user.username == username && user.password == password)
  
  if (persistedUser){
    
    const token = jwt.sign({username: persistedUser.username}, 'SOMESECRETKEY')
    res.json({token: token})
  } else {
    res.json({success: false, message: 'Invalid username and password'})
  }
  
})



app.listen(8080, () => {
  console.log("Server is running, keep it simple...")
})
