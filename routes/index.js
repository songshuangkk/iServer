var express = require('express');
var router = express.Router();

var iserver = require('../biz/iServer/iServer');
var account = require('../biz/iServer/account');

var passport = require('../config/passport_config');

router.get('/auth/github',
    passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        // 获取用户名
        var userName = req.query.userName;
        res.redirect('/home', {
            userName: userName
        });
    });

router.get('/', function(req, res, next){
    res.render('iServer/login');
});

router.get('/signUp', function(req, res){
    //res.render('iServer/signUp');
    res.render('iServer/sendEmailSuccess');
});

router.post('/account/create', account.create);

router.get('/home', function (req, res, next) {
  res.render('iServer/iServer');
});

router.get('/iServer', function (req, res, next) {
  res.render('iServer/iServer');
});

router.get('/iServer/hotWordSearch', iserver.searchHotWord);

router.get('/iServer/search', iserver.find_interface);

router.get('/iServer/new_interface', function (req, res) {
  res.render('iServer/new_interface');
});

router.get('/iServer/interface_list', iserver.interface_list);

router.post('/iServer/save_new_interface', iserver.save_new_interface);

router.get('/iServer/update_interface', iserver.update_interface);

router.get('/iServer/find_interface', iserver.find_interface);

router.get('/iServer/remove_interface', iserver.remove_interface);

module.exports = router;
