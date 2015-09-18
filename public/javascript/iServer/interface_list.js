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
            $(document).on('save_edit', 'click', save_editEvent);

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

        $('#editInterfaceName').val(interface_name);
        $('#editReturnType').val(return_type);
        $('#editReturnVal').val(return_name);
        $('#editInterfaceDesc').val(interface_desc);

        //动态的添加渲染接口参数
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
