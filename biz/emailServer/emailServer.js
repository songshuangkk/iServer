/**
 * Created by songshuang on 15/10/25.
 */
var nodemailer = require('nodemailer');
var emailConfig = require('../../config/email_config').emailConfig;

(function (){
    "use strict";

    var transport;

    function init () {
        transport = nodemailer.createTransport({
            server: emailConfig.host,
            auth: {
                user: emailConfig.user,
                pass: emailConfig.pass
            }
        });
    }

    var emailServer = function () {
        init();
    };

    emailServer.prototype.sendCheckEmail = function (emailAddress, message) {
        transport.send({
            from: '',
            to: emailAddress,
            subject: 'check',
            text: 'check',
            html: message
        }, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Send Message: ' + info.response);
            }
        });
    };

    exports = module.exports = new emailServer();

}());
