// Example model


var thinky = require('../config/thinky'),
  r = thinky.r,
  uniqid = require('uniqid'),
  type = thinky.type;

var Article = thinky.createModel('Article', {
  id: type.string().default(uniqid()),
  title: type.string(),
  authorId: type.string(),
  createdAt: type.date().default(r.now()),
  text: type.string()
});

Article.ensureIndex("id");

module.exports = Article;

// example on how to add relations
// var Comment = require('./comment');
// Article.hasMany(Comment, 'comments', 'id', 'article_id');
