/**
 * Created by songshuang on 15/8/23.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var InterfaceSchema = new Schema({
    interface_name: {type: String},
    interface_desc: {type: String},
    return_type: {type: String},
    return_name: {type: String}

});

exports.Interface = mongoose.model('Interface', InterfaceSchema);
