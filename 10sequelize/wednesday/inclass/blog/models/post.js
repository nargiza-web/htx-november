'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    isPublished: DataTypes.BOOLEAN
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    models.Post.hasMany(models.Comment,{as: 'comments',foreignKey: 'postId'})
  };
  return Post;
};