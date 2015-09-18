/**
 * Created by songshuang on 15/9/1.
 */
$(document).ready(function (){

    "use strict";

    function interface_list() {

        /**
         *
         * 初始化事件
         */
        function init_event() {
            /*点击修改按钮的时候，将数据渲染到编辑页面*/
            $('.editInterface').on('click', editInterfaceEvent);
            /*修改页面的保存按钮*/
            $(document).on('add_param', 'save_edit', save_editEvent);
            //添加参数按钮
            $(document).on('click', '#add_param', click_add_param);

            $('.removeInterface').on('click', removeInterfaceEvent);
        }

        return {
            init_event: init_event
        }
    }

    /**
     *
     * 修改编辑接口(进行渲染数据)
     */
    function editInterfaceEvent() {
        var item = ($(this).data()['info']);

        var id   = item._id,
            interface_desc = item.interface_desc,
            interface_name = item.interface_name,
            return_name    = item.return_name,
            return_type    = item.return_type,
            interface_param= JSON.parse(item.interface_param);

        $('#interface_name').val(interface_name);
        $('#return_value_type').val(return_type);
        $('#return_value').val(return_name);
        $('#des_interface').val(interface_desc);

        //动态的添加渲染接口参数
        var length = interface_param.length;

        _.each(interface_param, render_param);

        function render_param(item, index) {
            // 第一个参数的类型不用渲染添加
            if (index == 0) {
                $("input[name='param_value_type']").val(item.param_type);
                $("input[name='param_value_name']").val(item.param_name);
            } else {
                $('#add_param').toggle('click', function() {
                    var that = $(this);
                    click_add_param(item, that);
                });
            }
        }
    }

    /**
     *
     * 动态添加参数的功能
     *
     */
    function click_add_param(data, that) {
        var add_button = $(this);
        var add_param_div = '';
        if (data !== void 0) {
            add_button = that;
            add_param_div = '' +
                '<div class="param_div">' +
                '   <label class="new_interface_param">参数类型</label>' +
                '   <input type="text" name="param_value_type" class="form-control" value='+data.param_type+' placeholder="请输入参数类型"/>' +
                '   <label class="new_interface_param">参数名</label>' +
                '   <input type="text" name="param_value_name" class="form-control" value='+data.param_name+' placeholder="请输入参数名"/>' +
                '</div>';
        } else {
            add_param_div = '' +
                '<div class="param_div">' +
                '   <label class="new_interface_param">参数类型</label>' +
                '   <input type="text" name="param_value_type" class="form-control" placeholder="请输入参数类型" />' +
                '   <label class="new_interface_param">参数名</label>' +
                '   <input type="text" name="param_value_name" class="form-control" placeholder="请输入参数名"/>' +
                '</div>';
        }
        add_button.parent('.add_param').before(add_param_div);
    }


    /**
     *
     * 删除接口
     */
    function removeInterfaceEvent() {

        var data = {

        };

        var ret = $.ajax({
            url:  '/iServer/remove_interface',
            type: 'GET',
            data: data
        });

        ret.done(function(data){
            if (data.success) {

            }
        });

        ret.error(function(data){
            alert('网络错误!');
        })
    }

    /**
     *
     * 保存修改功能事件
     *
     */
    function save_editEvent(){
        var tr = $(this).closest('tr');
        var tdList = tr.children();
        var interface_name = tdList[0].innerHTML;
        var return_type = tdList[1].innerHTML;
        var interface_param = tdList[2].innerHTML;

        var data = {
            interface_name:  interface_name,
            return_type:     return_type,
            interface_param: interface_param
        };

        var ret = $.ajax({
            url: '/iServer/update_interface',
            type: 'GET',
            data: data
        });

        ret.done(function(data){
            if (data.success){

            }
        });

        ret.error(function(data){
            alert('修改编辑失败');
        })
    }



    var item = new interface_list();
    item.init_event();
});
