const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");

//a user has many posts, a post has one user
User.hasMany(Post, {
    foreignKey: "user_id"
});
Post.belongsTo(User, {
    foreignKey: "user_id"
});

//a user has many comments, a comment has one user
//a post has many comments, a comment has one post
Comment.belongsTo(User, {
    foreignKey: "user_id"
});
Comment.belongsTo(Post, {
    foreignKey: "post_id"
});
User.hasMany(Comment, {
    foreignKey: "user_id"
});
Post.hasMany(Comment, {
    foreignKey: "post_id"
});

module.exports = {User, Post, Comment};