/**
 * Created by songshuang on 15/9/1.
 */
$(document).ready(function (){

    "use strict";

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
     * 获得输入的参数
     * @param that
     */
    function getParamData(that) {
        var param_list = [],
            divParams = that.parent('div.modal-footer').prev().find('div.param_div');

        _.each(divParams, setData);

        function setData(item) {
            param_list.push({
                param_type: $(item).find("input[name='param_value_type']").val(),
                param_name: $(item).find("input[name='param_value_name']").val()
            })
        }

        return param_list;
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

        $('#interface_id').val(id);
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
     * 删除接口
     */
    function removeInterfaceEvent() {

        var interface_name = $(this).closest('tr').find('td').first().text();

        var data = {
            interface_name: interface_name
        };

        var ret = $.ajax({
            url:  '/iServer/remove_interface',
            type: 'GET',
            data: data
        });

        ret.done(function(data){
            if (data.success) {
                alert('删除成功');
                location.reload();
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
        var that = $(this),
            id = $('#interface_id').val(),
            interface_name = $('#interface_name').val(),
            return_type = $('#return_value_type').val(),
            interface_desc = $('#des_interface').val(),
            interface_param = getParamData(that);

        var data = {
            id: id,
            interface_name:  interface_name,
            return_type:     return_type,
            interface_param: interface_param,
            interface_desc:  interface_desc
        };

        var ret = $.ajax({
            url: '/iServer/update_interface',
            type: 'GET',
            data: data
        });

        ret.done(function(data){
            if (data.success){
                alert("修改编辑成功");
                $('#editModal').modal('hide');
            }
        });

        ret.error(function(data){
            alert('修改编辑失败');
            $('#editModal').modal('hide');
        })
    }


    function interface_list() {

        /**
         *
         * 初始化事件
         */
        function init_event() {
            /*点击修改按钮的时候，将数据渲染到编辑页面*/
            $('.editInterface').on('click', editInterfaceEvent);
            /*修改页面的保存按钮*/
            $(document).on('click', '.save_edit', save_editEvent);
            //添加参数按钮
            $(document).on('click', '#add_param', click_add_param);

            $('.removeInterface').on('click', removeInterfaceEvent);
        }

        return {
            init_event: init_event
        }
    }



    var item = new interface_list();
    item.init_event();
});
