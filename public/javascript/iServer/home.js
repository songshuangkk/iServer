/**
 * Created by songshuang on 15/11/18.
 */

function new_interface_button () {
    window.location = '/iServer/new_interface';
}

function interface_list() {
    window.location = '/iServer/interface_list';
}

function searchHotData(world) {
    new Promise(function (resolve, reject) {
        var data = world;
        var url = "/iServer/hotWordSearch?wd="+world;
        $.ajax({
            url: url,
            type: 'GET'
        }).done((data) => {

                if (data) {
                    resolve(JSON.parse(data));
                }
            })
            .error((error) => {
                console.log(error);
                reject(error);
            })
    }).then(function (data) {
            // 进行渲染搜索返回的数据
            if ($('#bdsug').hasClass('bdsug-show')) {
                $('#bdsug').removeClass('bdsug-none').addClass('bdsug-show');

                $('li.bdsug-overflow').each(function () {
                    $(this).text(data.interface_name);
                });
            } else {
                $('#bdsug').removeClass('bdsug-show').addClass('bdsug-none');
            }
        });
}

/**
 *
 *绑定组件事件
 *
 * */
function init() {

    /*
     *
     * 创建新的接口
     *
     */
    $(document).on('click', '#new_interface_button', function(){
        new_interface_button();
    });

    $(document).on('click', '#interface_list', function(){
        interface_list();
    });

    $(document).on('input', '.input_search_text', function () {
        var word = $(this).val();
        searchHotData(word);
    });
}

init();
