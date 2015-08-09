var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/iServer', function (req, res, next) {
  res.render('iServer/iServer');
});

module.exports = router;
