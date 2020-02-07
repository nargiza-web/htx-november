
const express = require('express')
const app = express() 
const jwt = require('jsonwebtoken')
const cors = require('cors')
const authentication = require('./middlewares/authentication')
const accountsRouter = require('./routes/accounts')

const users = [{username: 'johndoe', password: 'password'}]

// enable cors 
app.use(cors())
// body parser as json 
app.use(express.json())

// setup accounts router 
app.use('/accounts',authentication,accountsRouter)

app.post('/login',(req,res) => {

    const username = req.body.username 
    const password = req.body.password 

    // validate username and password 
    const persistedUser = users.find((user) => user.username == username && user.password == password)

    if(persistedUser) {
        // user has been authenticated
        // generate a token 
        // make sure to put the secret key in .env file 
        const token = jwt.sign({username: persistedUser.username},'SOMESECRETKEY')
        res.json({token: token})
    } else {
        // user is not authenticated 
        res.json({success: false, message: 'Invalid username or password'})
    }


})

app.listen(8080, () => {
    console.log('Server is running...')
})