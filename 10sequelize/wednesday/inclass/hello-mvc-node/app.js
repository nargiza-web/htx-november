const express = require('express')
const app = express() 
const postsRouter = require('./routes/posts')

app.use('/posts',postsRouter)

app.listen(3000,() => {
    console.log('Server is running...')
})