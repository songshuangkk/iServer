/**
 * Created by songshuang on 15/8/25.
 *
 *
 * 对于接口的存数的一个CRUD
 */



var Interface_model = require('../model/interface_model');
var Interface = Interface_model.Interface;

/**
 *
 * 增加新接口
 *
 */
exports.insert_new_interface = function(interface, callback){
    if (typeof callback === 'function') {
        Interface.save(interface, callback);
    } else {
        Interface.save(interface);
    }
};

/**
 *
 * 查找接口
 *
 */
exports.find_interface = function (search_param, callback) {
    if (!search_param) {
        callback(null);
    }
    Interface.find(search_param, callback);
};

/**
 *
 *
 * 修改接口
 *
 */

exports.update_interface = function() {

};

/**
 *
 *
 * 删除接口
 *
 */
exports.delete_interface = function (){

};
