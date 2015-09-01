/**
 * Created by songshuang on 15/8/23.
 */

var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    interface_name: {type: String},
    interface_desc: {type: String},
    return_type: {type: String},
    return_name: {type: String},
    interface_param: {type: String}

});

exports.Interface = mongoose.model('Interfaces', Schema, 'Interfaces');
