var express = require('express');
var router = express.Router();

var iserver = require('../biz/iServer/iServer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/iServer', function (req, res, next) {
  res.render('iServer/iServer');
});

router.get('/iServer/search', iserver.search);

router.get('/iServer/new_interface', function (req, res) {
  res.render('iServer/new_interface');
});

router.post('/iServer/save_new_interface', iserver.save_new_interface);

module.exports = router;
