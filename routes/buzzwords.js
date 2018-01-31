const express = require('express');
// const app = express();
const router = express.Router();
let arr = [];

router
  .get(`/`, (req, res) => {
    res.JSON(arr);
  })

  .post(`/`, (req, res) => {
  if (arr.length < 5) {
    arr.push(req.body); 
    res.send({ 'success': true });
    console.log(arr);
  }
  return false;
  });

module.exports = router;