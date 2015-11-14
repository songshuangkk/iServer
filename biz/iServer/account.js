/**
 * Created by songshuang on 15/10/25.
 */

/**
 * 创建用户
 */
"use strict";

var emailServer = require('../emailServer/emailServer');

function RegObject () {
    var regEmail = new RegExp();
    var regPassword = new RegExp();

    var regEmailFunction = function  (data) {
        return {
            message: '用户邮箱格式有误',
            error: true
        }
    };

    var regPassword = function () {
        return {
            message: '用户密码格式有误',
            error: true
        }
    };

    return {
        regEmail: regEmailFunction,
        regPassword: regPassword
    };
}

var regObject = new RegObject();

exports.create = function (req, res) {
    var userName = req.body.userName,
        userEmail = req.body.userEmail,
        password = req.body.password;

    var data = {
        userName: userName,
        userEmail: userEmail,
        passowrd: password
    };

    // 校验输入的用户的内容的格式
    var ret = regObject.regEmail(userEmail);
    if (!ret.error) {
        res.render('iServer/signUp',{
            data: data,
            error: true,
            message: ret.message
        });
    }
    ret = regObject.regPassword(password);
    if (!ret.error) {
        res.render('iServer/signUp',{
            data: data,
            error: true,
            message: ret.message
        });
    }

    emailServer.sendCheckEmail(userEmail)
        .then(function (data) {
            console.log('send email success');
            res.render('iServer/sendEmailSuccess', {
                data: {
                    userName: userName
                }
            });
        }, function (error) {
            console.log(error);
            res.render('iServer/signUp');
        });
};