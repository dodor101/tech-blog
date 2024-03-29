const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
// const Like = require('./Like');
//create associations
User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// Like.belongsTo(User, {
//   foreignKey: 'user_id',
// });

// Like.belongsTo(Post, {
//   foreignKey: 'post_id',
// });

// Post.hasMany(Like, {
//   foreignKey: 'post_id',
// });

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

module.exports = { User, Post, Comment };
