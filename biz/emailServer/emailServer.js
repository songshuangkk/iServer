/**
 * Created by songshuang on 15/10/25.
 */
"use strict";

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var emailConfig = require('../../config/email_config').emailConfig;

var transport;

var hostOptions = {
    host: emailConfig.host,
    auth: {
        user: emailConfig.user,
        pass: emailConfig.pass
    }
};

function init() {
    transport = nodemailer.createTransport(smtpTransport(hostOptions));
}

var emailServer = function () {
    init();
};

emailServer.prototype.sendCheckEmail = function (emailAddress, message) {

    var mailOptions = {
        from: emailConfig.user, // sender address
        to: emailAddress, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ✔', // plaintext body
        html: '<b>Hello world ✔</b>' // html body
    };
    return new Promise (function (resolve, reject) {
        transport.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log('Send Message: ' + info.response);
                resolve(info);
            }
        });
    });
};

exports = module.exports = new emailServer();