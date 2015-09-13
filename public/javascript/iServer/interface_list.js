/**
 * Created by songshuang on 15/9/1.
 */
$(document).ready(function (){

    function interface_list() {

        /**
         *
         * 初始化事件
         */
        function init_event() {
            /*修改接口事件*/
            $('.save_edit').on('click', editInterfaceEvent);
            $('.removeInterface').on('click', removeInterfaceEvent);
        }

        return {
            init_event: init_event
        }
    }

    /**
     *
     * 修改编辑接口
     */
    function editInterfaceEvent() {
        alert('save_edit');
        return;
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

    var item = new interface_list();
    item.init_event();
});
