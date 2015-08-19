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
  iserver.search(req, res, next);
  res.render('iServer/iServer');
});

router.get('/iServer/new_interface', function (req, res) {
  res.render('iServer/new_interface');
});

module.exports = router;
