/**
 * Created by songshuang on 15/10/27.
 */

var Schema = require('../model/user_model').User;

exports.add_user = function (user, callback) {
    user.save(callback);
};

exports.delete_user = function (user, callback) {
    Schema.delete(user, callback);
};

exports.update_user = function (user, callback) {

};

exports.select_user = function (param, callback) {

};

exports.get_user_list = function (param, callback) {

};