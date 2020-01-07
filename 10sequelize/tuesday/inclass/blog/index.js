const express = require('express')
const mustacheExpress = require('mustache-express')
const models = require('./models')
const app = express() 

app.use(express.urlencoded())

// tell express to use mustache templating engine
app.engine('mustache',mustacheExpress())
// the pages are located in views directory
app.set('views','./views')
// extension will be .mustache
app.set('view engine','mustache')

app.get('/',(req,res) => {
    models.Post.findAll().then(posts => res.render('index',{posts: posts}))
})

app.get('/comments/:commentId',(req,res) => {
    
    const commentId = req.params.commentId
    models.Comment.findByPk(commentId,{
        include: [
            {
                model: models.Post, 
                as: 'post'
            }

        ]
    }).then(comment => res.json(comment))

})

app.get('/posts/:postId',(req,res) => {

    const postId = req.params.postId

    /*
    models.Post.findByPk(postId).then(post => {
        res.json(post)
    }) */

    models.Post.findByPk(postId,{
        include: [
            {
                model: models.Comment, 
                as: 'comments'
            }
        ]
    }).then(post => {
       // res.json(post)
       console.log(post.dataValues)
       //res.json(post)
      res.render('post-details',{title: post.title, body: post.body, comments: post.comments})
    })
})

app.post('/comments',(req,res) => {
    
    const postId = parseInt(req.body.postId) 
    const subject = req.body.subject 
    const body = req.body.body 
    const username = req.body.username
    
    const comment = models.Comment.build({
        postId: postId, 
        subject: subject, 
        body: body, 
        username: username
    })

    comment.save().then(savedComment => res.send("SAVED"))
})

app.post('/update-post',(req,res) => {

    const postId = parseInt(req.body.postId) 
    const title = req.body.title 
    const body = req.body.body 
    const isPublished = req.body.isPublished 

    models.Post.update({
        title: title, 
        body: body, 
        isPublished: isPublished
    },{
        where: {
            id: postId
        }
    }).then(updatedPost => res.redirect('/'))

})

app.post('/posts',(req,res) => {

    const title = req.body.title 
    const body = req.body.body 
    const isPublished = req.body.isPublished 

    console.log(title, body, isPublished)

    // post object is not yet saved to the database
    const post = models.Post.build({ 
        title: title, 
        body: body, 
        isPublished: isPublished 
    })

    post.save().then(savedPost => res.send("SAVED"))

})

app.listen(3000,() => {

})