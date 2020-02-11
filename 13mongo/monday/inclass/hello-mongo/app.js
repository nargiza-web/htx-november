const express = require('express')
const mongoose = require('mongoose');
const app = express() 
const Post = require('./models/post')
const Comment = require('./models/comment')

app.use(express.json())

// creating a post object 
/*
const post = new Post({title: "Hello MongoDb", author: 'marydoe'})
// save the post to mongodb database 
post.save().then(doc => console.log(doc))
.catch(error => console.log(error)) // for catching errors  
*/

// to update the post 
app.put('/posts',(req,res) => {
    const postId = req.body.postId 
    const title = req.body.title 
    const author = req.body.author 

    Post.findByIdAndUpdate(postId,{
        title: title, 
        author: author
    }).then(doc => res.json({message: 'Post has been updated'}))
    .catch(error => res.json({message: 'Error updating post'}))
})

app.get('/posts/:postId',(req,res) => {
    // get the post using the postId
    const postId = req.params.postId
    Post.findById(postId).then(doc => res.json(doc))
})

app.get('/posts',(req,res) => {
    // find({}) means give us everything without any filter 
    Post.find({}).then(posts => res.json(posts))
})


// connect to a database 
// if the database exist then it will connect to it or else it will create the database
mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true});

//const post = new Post({title: 'Hello iOS', author: 'johndoe'})
//post.save().then(doc => console.log(doc))

// create a comment 
const comment = new Comment({subject: 'First Comment', likes: 2, body: 'this is comment'})

// update the post to add a comment 

Post.findByIdAndUpdate('5e41887e41f21c1e69abd892',{
    $push: {
       comments: comment 
    }
}).then(doc => console.log(doc))


app.listen(8080, () => {
    console.log('Server is running...')
})