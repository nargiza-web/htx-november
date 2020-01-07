'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    subject: DataTypes.STRING,
    body: DataTypes.STRING,
    username: DataTypes.STRING, 
    postId: DataTypes.INTEGER 
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    models.Comment.belongsTo(models.Post,{as: 'post',foreignKey: 'postId'})
  };
  return Comment;
};