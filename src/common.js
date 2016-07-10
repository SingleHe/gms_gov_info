$(document).ready(function(){

    // TODO: 扩展 slick 能够现实 banner-text
    var _slick = $.prototype.slick;
    $.prototype.slick = function (options) {
        _slick.call(this, options);
    }

});