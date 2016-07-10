$(document).ready(function(){
    $('.home-page-carousel').slick({
        autoplay: false,
        arrows: false,
        appendDots: '.carousel-dot-panel',
        dots: true,
        dotsClass: 'carousel-dot'
    });

    $('.home-page-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var currentText = $(this).siblings('.carousel-dot-panel').find('.carousel-text-item[data-index=' + currentSlide + ']');
        var nextText = $(this).siblings('.carousel-dot-panel').find('.carousel-text-item[data-index=' + nextSlide + ']');
        console.log(currentSlide,nextSlide);
        $(currentText).removeClass('active');
        $(nextText).addClass('active');
    });
});
