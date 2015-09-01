/**
 * Created by songshuang on 15/8/25.
 *
 *
 * 对于接口的存数的一个CRUD
 */



var Schema = require('../model/interface_model').Interface;


exports.interface_list = function (callback) {
  Schema.find(callback);
};

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
    Schema.find(param, callback);
};

/**
 *
 *
 * 修改接口
 *
 */

exports.update_interface = function(param, updata,callback) {
    Schema.update(param, updata, callback);
};

/**
 *
 *
 * 删除接口
 *
 */
exports.remove_interface = function (param, callback){
    Schema.remove(param, callback);
};
