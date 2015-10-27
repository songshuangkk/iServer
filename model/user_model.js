/**
 * Created by songshuang on 15/10/27.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    userName: {type: String},
    passWord: {type: String},
    email: {type: String}
});

exports.User = mongoose.model('Interfaces', Schema, 'user');