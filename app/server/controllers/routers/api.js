const express = require('express');
const router = express.Router();
const Promise = require('bluebird');

router.post('/', (req, res)=>{
  console.log("POST API");
  let response = {
    message: "This is a JSON POST response."
  }
  res.send(response);
});

router.post('/create/world/:persons', (req, res)=>{
  console.log(req.params);
  let numPersons = parseInt(req.params['persons'], 10);

  console.log(numPersons);
});

module.exports = router;
