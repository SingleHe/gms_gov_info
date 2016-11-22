$(document).ready(function(){

    // TODO: 扩展 slick 能够现实 banner-text
    var _slick = $.prototype.slick;
    $.prototype.slick = function (options) {
        _slick.call(this, options);
    }

    // 初始化所有的 tab 栏目
    var tabs = $('.my-tab');
    $.each(tabs, function(index, tab){
        var lis = $(tab).find('.tab-header ul li');
        var contents = $(tab).find('.tab-content div');

        $.each(lis, function(index, li){
            $(li).hover(function(){
                var tabIndex = $(this).attr('data-index');
                $(this).siblings().removeClass('active');
                $(this).addClass('active');

                $(contents).removeClass('active');
                $(contents).siblings('[data-index=' + tabIndex + ']').addClass('active');
            });
        });
    });
    //实现左侧菜单栏 选中后添加样式
    $(".text-left a").each(function(){
        $this = $(this);
        $this.click(function(){
                $(".text-left .leftMenuOn").removeClass("leftMenuOn");
                $this.parent().addClass("leftMenuOn");
                return false; 
            });
        // if($this[0].href == String(window.location)){
        //     $this.parent().addClass("leftMenuOn");
        // }
    })

});