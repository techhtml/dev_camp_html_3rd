var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/movie', function(req, res, next) {
  res.render('movie', { title: '영화' });
});

module.exports = router;
