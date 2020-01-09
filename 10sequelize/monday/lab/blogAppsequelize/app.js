const express = require('express')
const app = express()
const models = require('./models')
//const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const PORT=3000


app.use(bodyParser.urlencoded({extended: false}))
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// updating in sequelize
/*
models.Post.update({
  isPublished : true
}, {
  where: {
    id: 2
  }
})
*/


app.post('/comments', (req, res) => {
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

app.get('/posts/:postId', (req, res) => {
  const postId = parseInt(req.params.postId)
  models.Post.findByPk(postId, {
    include: [
      {
        model: models.Comment,
        as: 'comments'
      }
    ]
  }).then(post => {
    res.render('post-details', {title: post.title, body: post.body, comments: post.comments})
  })
  //models.Post.findByPk(postId).then(post => res.send(post))
})

app.post('/posts/delete-comment', async (req, res) => {
  let commentId = req.body.commentId
  let result = await models.Comment.destroy({
    where: {
      id: commentId
    }
  })
  res.send('Success')
})

app.post('/register', async (req, res)=> {
  let name = req.body.name
  let username = req.body.username
  let password = req.body.password
  
  const register = models.User.build({
    name: name, 
    username: username,
    password: password,
  })
  register.save().then(result => res.send("saved"))
  
})

app.post('/posts/update-comment', async (req, res) => {
  const commentId = req.body.commentId
  const subject = req.body.subject
  const body = req.body.body
  const username = req.body.username
  
  let updatedComment = await models.Comment.update({
    subject: subject,
    body: body,
    username: username
  }, {
    where:{
      id: commentId
    }
  }).then(updatedComment => res.send("updated SUCCESS"))
})

app.post('/delete-post', async (req, res) => {
  let postId = req.body.postId
  
  let result = await models.Post.destroy({
    where: {
      id: postId
    }
  })
  
  res.redirect('/posts')
})


app.get('/create-post', (req, res) => {
  res.send("Success!!")
})


app.get('/', (req, res) => {
  res.send("Hello")
})

 
app.post('/create-post', async (req, res)=>{
  let title = req.body.title
  let body = req.body.body
  let category = req.body.category
  
  const post =  await models.Post.build({
    title: title,
    body: body,
    category: category
  })
  
  let persistedPost = await post.save()
  
  if(persistedPost != null) {
    res.redirect('/posts')
  } else {
    res.render('/create-post', {message: 'Unable to create a post'})
  }
})


app.get('/posts', (req, res) => {
  models.Post.findAll().then(posts => res.json(posts))
})


app.post('/update', (req, res)=> {
  res.send("hi")
})


app.listen(PORT, (req, res) => {
  console.log("PORT is running at " + PORT)
})
