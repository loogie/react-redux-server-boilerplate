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

module.exports = router;
