var express = require('express');
var router = express.Router();
var stream = require('r-stream');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var number = stream(5);

  console.log(number());

  number(7);

  res.render('users', {
    title: 'user page',
    name: 'zhunian'
  });
});

module.exports = router;
