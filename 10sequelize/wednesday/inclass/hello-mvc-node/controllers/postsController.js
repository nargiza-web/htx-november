
const models = require('../models')

module.exports.getAllPosts = (req,res,next) => {
    models.Post.findAll().then(posts => res.json(posts))
    .catch(error => res.json(error))

    //res.render('index',{posts: posts})

}

/*
module.exports.getAllPosts = async (req,res,next) => {
    // use try-catch to catch the errors
    const posts = await models.Post.findAll()
    res.json(posts)
}  */