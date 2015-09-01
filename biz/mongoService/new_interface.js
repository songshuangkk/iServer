/**
 * Created by songshuang on 15/8/20.
 */

var Interface_service   = require('../../model_service/Interface_service');
var Interface_Schema    = require('../../model/interface_model').Interface;

exports.interface_list = function (req, res) {
    var list = "";
    Interface_service.interface_list(function (err, docs){
        if (err) {
            console.error('interface list failed');
            throw err;
        }
        list = docs;
        //return res.render('../public/javascript/interface_list', {
        //    list: docs
        //});
    });

};


/**
 *
 * 添加新接口
 *
 * @param data
 */
exports.insert_interface = function(data) {

    var insert_data = new Interface_Schema();
    insert_data.interface_name   = data.interface_name;
    insert_data.interface_desc   = data.interface_desc;
    insert_data.return_type      = data.return_type;
    insert_data.return_name      = data.return_name;
    insert_data.interface_param  = JSON.stringify(data.interface_param);

    try{
        Interface_service.insert_new_interface(insert_data, function(err) {
            if (err) {
                console.log('insert failed');
            } else {
                console.log('insert success');
            }
        });
    } catch (e) {
        console.error(e);
    }

};


/**
 *
 * 删除接口
 *
 * @param data
 */
exports.remove_interface = function(data){

    var param = {
      interface_name: data.interface_name
    };

    Interface_service.remove_interface(param, function(err) {
        if (err) {
            console.error('remove interface failed!');
            throw err;
        }
        console.log('remove interface success!');
    });
};

/**
 *
 * 更新/修改接口
 *
 * @param data
 */
exports.update_interface = function(data){

    var param = data.param;

    var data = data.data;

    Interface_service.update_interface(param, data,function(err){
        if (err) {
            console.error('update interface failed!');
            throw err;
        }
        console.log('update interface success');
    });
};


/**
 *
 * 查找接口
 *
 * @param data
 */
exports.find_interface = function(data){

    var param = {
      interface_name: data.interface_name
    };

    Interface_service.find_interface(data, function(err, docs){
        if (err){
            console.error('find interface failed');
            throw err;
        }
        console.log('find interface success');
    });


};
