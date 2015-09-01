/**
 * Created by songshuang on 15/8/25.
 *
 *
 * 对于接口的存数的一个CRUD
 */



var Interface_model = require('../model/interface_model');

/**
 *
 * 增加新接口
 *
 */
exports.insert_new_interface = function(interface, callback){
    interface.save(callback);
};

/**
 *
 * 查找接口
 *
 */
exports.find_interface = function (param, callback) {
    Interface_model.find(param, callback);
};

/**
 *
 *
 * 修改接口
 *
 */

exports.update_interface = function(param, updata,callback) {
    Interface_model.update(param, updata, callback);
};

/**
 *
 *
 * 删除接口
 *
 */
exports.remove_interface = function (param, callback){
    Interface_model.remove(param, callback);
};
