const express = require('express');
const router = express.Router();
const apiRouter = require('./routers/api');
const Promise = require('bluebird');

module.exports = function (app) {
  app.use('/api', apiRouter);
  app.use('/', router);
};

router.get('/*', (req, res)=>{
  res.render('index', {title:"Test Title"});
});
