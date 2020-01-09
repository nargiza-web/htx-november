const express = require('express')
const router = express.Router()
const PostsController = require('../controllers/postsController') 

// /posts
router.get('/',PostsController.getAllPosts)

/*
router.get('/',(req,res) => {
    res.send("ROOT ROUTER for POSTS")
}) */

module.exports = router 