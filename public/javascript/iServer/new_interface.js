//Created by songshuang on 15/8/19.

   init_event();

   /*
   *
   * 绑定相关的按钮事件
   *
   * */
   function init_event() {

      //创建接口按钮
      $(document).on('click', '.save_new_interface', click_save_new_interface);

      //添加参数按钮
      $(document).on('click', '#add_param', click_add_param);
   }

   function click_save_new_interface() {
      var data = {
         interface_name   : $('#interface_name').val(),
         return_name      : $('#return_value').val(),
         return_type      : $('#return_value_type').val(),
         interface_des    : $('#des_interface').val()
      };

      var param_data = get_param_data($(this));
      data.interface_param = param_data;

      var ret = $.ajax({
         url: '/iServer/save_new_interface',
         type: 'POST',
         dataType: 'json',
         data: data
      });

      ret.done(function(data){
         if (data.success) {

         }
      });

      ret.error(function(error){
         $.alert('创建失败');
      });

   }

   function click_add_param() {
      var add_button = $(this);
      var add_param_div = '<div class="param_div">' +
              '<label class="new_interface_param">参数类型</label>' +
              '<input type="text" name="param_value_type" class="form-control" placeholder="请输入参数类型" />' +
              '<label class="new_interface_param">参数名</label>' +
              '<input type="text" name="param_value_name" class="form-control" placeholder="请输入参数名"/>' +
              '</div>';
      add_button.parent('.add_param').before(add_param_div);
   }

   /*
   *
   * 取得输入的参数信息
   *
   * */
   function get_param_data(data) {
      var param_list    = [];
      var form_group     = data.prev().prev();
      form_group.find('div.param_div').each(function() {
         var param_value_type = $(this).find('input[name="param_value_type"]').val();
         var param_value_name = $(this).find('input[name="param_value_name"]').val();
         param_list.push({
            param_type: param_value_type,
            param_name: param_value_name
         })
      });

      return param_list;
   }