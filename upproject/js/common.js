$(document).ready(function(){
    //slider ============================
    $('.mv').slick({
        infinite: true,
        arrows : false,
        speed: 800,
        fade: true,
        cssEase: 'linear',
        autoplay : true
    });

    //Tabs - Tabs Content ===============
    // $('.c-tabs li').click(function(){
    //     var showContent = $(this).data('content');
    //     $('.c-tabs li').removeClass('active');
    //     $(this).addClass('active');
    //     $('#'+showContent).fadeIn();
    //     $('.c-listpost').not('#'+showContent).hide();
    // });
});