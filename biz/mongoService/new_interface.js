/**
 * Created by songshuang on 15/8/20.
 */

var Interface_service   = require('../../model_service/Interface_service');
var Interface_Schema    = require('../../model/interface_model').Interface;


exports.insert_interface = function(data) {

    var insert_data = new Interface_Schema();
    insert_data.interface_name   = data.interface_name;
    insert_data.interface_desc   = data.interface_desc;
    insert_data.return_type      = data.return_type;
    insert_data.return_name      = data.return_name;

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
