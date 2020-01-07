const express = require('express'); 
const app = express() 
const models = require('./models')

/*
const post =  models.Post.build({
    title: 'Hello SQL', 
    body: 'Body for SQL'
})
console.log("BEFORE SAVING")
console.log(post)

console.log("AFTER SAVING")

post.save().then(savedPost => console.log(savedPost))
*/


/*
models.Post.destroy(
    {
        where: {
            id: 2
        }
    }
).then(deletedPost => {
    console.log(deletedPost)
}) */


// updating in sequelize 
/*
models.Post.update({
    username: 'johndoe'
},{
    where: {
        id: 1
    }
}) */

app.get('/posts/:postId',(req,res) => {
    const postId = parseInt(req.params.postId) 
    models.Post.findByPk(postId).then(post => res.json(post))
})

app.get('/posts',(req,res) => {
    models.Post.findAll().then(posts => res.json(posts))
})

app.listen(3000,() => {
    console.log('Server is running...')
})