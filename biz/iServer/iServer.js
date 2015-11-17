/**
 * Created by songshuang on 15/8/9.
 */

var interface_service = require('../mongoService/new_interface');

exports.interface_list = function (req, res, next) {
    interface_service.interface_list(req, res);
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
    interface_service.insert_interface(new_interface_data);

};


exports.update_interface = function (req, res, next) {
    var data = req.query;
    interface_service.update_interface(data, req, res);
};

exports.find_interface = function (req, res, next) {
    var data = req.query.search_text;
    interface_service.find_interface(data)
        .then(function (data) {
            res.render('iServer/interfaceInfo', {
                interfaceInfo: JSON.stringify(data)
            })
        }, function (error) {
            console.log(error);
            res.render('iServer/noData');
        })
};

exports.remove_interface = function (req, res, next) {
    var data = req.query;

    interface_service.remove_interface(data, req, res);
};