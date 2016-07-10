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

});