/**
 * Created by songshuang on 15/8/23.
 */
var mongoose = require('mongoose');
var config   = require('../config');

mongoose.connect(config.MongoHost);

mongoose.set('debug', config.MongodbDebug);

var db = mongoose.createConnection();

db.on('error', function(err) {
    console.error('connected mongodb failed');
});

db.once('open', function(err){
    console.log('connected success!');
});

require('../model/interface_model');

exports.Interface = mongoose.model('Interfaces');