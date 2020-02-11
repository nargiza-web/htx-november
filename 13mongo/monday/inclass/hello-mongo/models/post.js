const mongoose = require('mongoose')

// define a schema/structure of the documents
var postSchema = new mongoose.Schema({
    title: String, 
    author: String, 
    comments: [] 
  });

  // collection (document database) = table (relational database)
  // 'Post' will be the name of the collection in MongoDb but in Plural 
  // This means the collection name would be Posts 
  var Post = mongoose.model('Post', postSchema);

  module.exports = Post 