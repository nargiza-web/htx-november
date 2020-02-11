
const mongoose = require('mongoose')

// define a schema/structure of the documents
var commentSchema = new mongoose.Schema({
    subject: String, 
    body: String,
    likes: Number 
  });

  // collection (document database) = table (relational database)
  // 'Post' will be the name of the collection in MongoDb but in Plural 
  // This means the collection name would be Posts 
  var Comment = mongoose.model('Comment', commentSchema);

  module.exports = Comment  