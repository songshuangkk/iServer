var express = require('express');
var router = express.Router();

var iserver = require('./iServer/iServer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/iServer', function (req, res, next) {
  res.render('iServer/iServer');
});

router.get('/iServer/search', function (req, res, next) {
  iserver.search();
  res.render('iServer/iServer');
});

module.exports = router;
