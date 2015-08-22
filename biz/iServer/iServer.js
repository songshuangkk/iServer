/**
 * Created by songshuang on 15/8/9.
 */

var db = require('../mongoService/new_interface');

exports.search = function (req, res, next) {

};

exports.save_new_interface = function (req, res, next) {
    var data = req.body;

    var new_interface_data = {};
    new_interface_data.interface_name       = data.interface_name;
    new_interface_data.return_type          = data.return_type;
    new_interface_data.return_name          = data.return_name;
    new_interface_data.interface_desc       = data.interface_des;
    new_interface_data.interface_param      = data.interface_param;

    //进行插入mongodb
    db.insert_interface(JSON.stringify(data));
};