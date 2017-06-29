const express = require('express');
const router = express.Router();
const Promise = require('bluebird');
const models = require('../models');
const r = require('../config/thinky').r;
const Article = models.Article;

module.exports = function (app) {
  app.use('/', router);
};

router.get('/*', (req, res)=>{
  res.render('index', {title:"Test Title"});
});
