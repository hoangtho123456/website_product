(function ($) {
    $(document).ready(function () {
        var $window = $(window);


/*
$('.custom_paging').slick({
    autoplay: true,
    dots: true,
    dotsClass: 'custom_paging',
    customPaging: function (slider, i) {
        console.log(slider);
        return (i + 1) + '/' + slider.slideCount;
    }    
});

*/


    // Responsive Slick    
    function ResSlickSlider() {
        $(".SlickSlider").each(function () {
            var $slider = $(this),
                responsive =  $slider.attr('data-res'),
                speed = $slider.attr('data-speed'),
                autospeed = $slider.attr('data-autospeed');
            if(!responsive) { responsive = '1,1,1,1,1'; }
            responsive = responsive.split(',');
            $slider.imagesLoaded(function(){    
                $slider.slick({
                    nextArrow: '<span class="nextArrow"><i class="fa fa-angle-right"></i></span>',
                    prevArrow: '<span class="prevArrow"><i class="fa fa-angle-left"></i></span>',    
                    infinite: $slider.hasClass('s-loop') ? true : false,
                    fade: ($slider.hasClass('s-fade') ? true : false),                                   
                    adaptiveHeight: ($slider.hasClass('s-height') ? true : false),
                    arrows: ($slider.hasClass('s-nav') ? true : false),
                    dots: ($slider.hasClass('s-dots') ? true : false),
                    speed: (speed ? parseInt(speed) : 400),
                    variableWidth: ($slider.hasClass('s-width') ? true : false),
                    autoplaySpeed: (autospeed ? parseInt(autospeed) : 5000),
                    autoplay: $slider.hasClass('s-auto') ? true : false,
                    centerMode: $slider.hasClass('s-center') ? true : false,

                    slidesToShow: parseInt(responsive[0]),
                      responsive: [
                        {
                          breakpoint: 1200,
                          settings: {
                            slidesToShow: parseInt(responsive[1]),
                            arrows: false,
                            autoplay:true
                          }
                        },
                        {
                          breakpoint: 992,
                          settings: {
                            slidesToShow: parseInt(responsive[2]),
                            arrows: false,
                            autoplay:true
                          }
                        },                        
                        {
                          breakpoint: 768,
                          settings: {
                            slidesToShow: parseInt(responsive[3]),
                            arrows: false,
                            autoplay:true   
                          }
                        },
                        {
                          breakpoint: 480,
                          settings: {
                            slidesToShow: parseInt(responsive[4]),
                            arrows: false,
                            autoplay:true     
                          }
                        }
                      ]
                });
            });
        });    
    }        
    ResSlickSlider();    


    // Sync Slick
    function OsProductThumbnailSlider() {
        $(".wrap-syn-slick").each(function () {
            var $this = $(this),
                $slider01 = $this.find(".syn-slider-1"),
                $slider02 = $this.find(".syn-slider-2");


            var s02responsive =  $slider02.attr('data-res').split(',');
            var s02autospeed = $slider02.attr('data-autospeed');
            var s02speed = $slider02.attr('data-speed');
            var s01autospeed = $slider01.attr('data-autospeed');
            var s01speed = $slider01.attr('data-speed');
            
            $slider01.imagesLoaded(function(){    
                $slider01.slick({
                    swipeToSlide: true,
                    nextArrow: '<span class="nextArrow"><i class="fa fa-angle-right"></i></span>',
                    prevArrow: '<span class="prevArrow"><i class="fa fa-angle-left"></i></span>',    
                    infinite: $slider01.hasClass('s-loop') ? true : false,
                    fade: ($slider01.hasClass('s-fade') ? true : false),                                   
                    adaptiveHeight: ($slider01.hasClass('s-height') ? true : false),
                    arrows: ($slider01.hasClass('s-nav') ? true : false),
                    dots: ($slider01.hasClass('s-dots') ? true : false),
                    speed: (s01speed ? parseInt(s01speed) : 400),
                    variableWidth: ($slider01.hasClass('s-width') ? true : false),
                    autoplaySpeed: (s01autospeed ? parseInt(s01autospeed) : 5000),
                    autoplay: $slider01.hasClass('s-auto') ? true : false,
                    vertical: ($slider01.hasClass('s-vertical') ? true : false),
                    verticalSwiping: ($slider01.hasClass('s-vertical') ? true : false),
                    infinite:  true 


                });
            });

            $slider01.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                syncPosition(nextSlide);
            });

            var visibleItems = [];
            var option = 0;

            $slider02.on("init", function (event, slick) {
                $(this).find(".slick-slide").eq(0).addClass("synced");
                var WW = window.innerWidth;
                if (WW >= 1020) {
                    option = 6;
                }

                if (WW < 1020) {
                    option = 3;
                }

                for (var i = 0; i < option; i++) {
                    visibleItems.push(i);
                }
            });

            $window.on('resize load', function (event) {
                var WW = window.innerWidth;
                if (WW >= 1020) {
                    option = 6;
                }

                if (WW < 1020) {
                    option = 3;
                }
                return option;
            });

            $slider02.on('afterChange', function (event, slick, currentSlide) {
                visibleItems.length = 0;
                for (var i = currentSlide; i < currentSlide + option; i++) {
                    visibleItems.push(i);
                }
            });

            $slider02.slick({
                    swipeToSlide: true,
                    nextArrow: '<span class="nextArrow"><i class="fa fa-angle-right"></i></span>',
                    prevArrow: '<span class="prevArrow"><i class="fa fa-angle-left"></i></span>',    
                    infinite: $slider02.hasClass('s-loop') ? true : false,
                    fade: ($slider02.hasClass('s-fade') ? true : false),                                   
                    adaptiveHeight: ($slider02.hasClass('s-height') ? true : false),
                    arrows: ($slider02.hasClass('s-nav') ? true : false),
                    dots: ($slider02.hasClass('s-dots') ? true : false),
                    speed: (s02speed ? parseInt(s02speed) : 400),
                    variableWidth: ($slider02.hasClass('s-width') ? true : false),
                    autoplaySpeed: (s02autospeed ? parseInt(s02autospeed) : 5000),
                    autoplay: $slider02.hasClass('s-auto') ? true : false,
                    vertical: ($slider02.hasClass('s-vertical') ? true : false),
                    verticalSwiping: ($slider02.hasClass('s-vertical') ? true : false),
                    slidesToShow: parseInt(s02responsive[0]),
                  //  infinite:  true ,


                      responsive: [
                        {
                          breakpoint: 1200,
                          settings: {
                            slidesToShow: parseInt(s02responsive[1]),
                            arrows: false,
                            autoplay:true
                          }
                        },
                        {
                          breakpoint: 992,
                          settings: {
                            slidesToShow: parseInt(s02responsive[2]),
                            arrows: false,
                            autoplay:true
                          }
                        },                        
                        {
                          breakpoint: 768,
                          settings: {
                            slidesToShow: parseInt(s02responsive[3]),
                            arrows: false,
                            autoplay:true 
                          }
                        },
                        {
                          breakpoint: 480,
                          settings: {
                            slidesToShow: parseInt(s02responsive[4]),
                            arrows: false,
                            autoplay:true,
                            vertical: false,
                            verticalSwiping: false  
                          }
                        }
                      ]                
            });

            function syncPosition(value) {
                var current = value;
                $slider02
                    .find(".slick-slide")
                    .removeClass("synced")
                    .eq(current)
                    .addClass("synced");
                center(current);
            }

            $slider02.on("click", ".slick-slide", function (e) {
                e.preventDefault();
                var number = $(this).data("slick-index");
                $slider01.slick("slickGoTo", number);
            });

            function center(number) {
                var num = number;
                var found = false;
                var lastSlideIndex = $slider02.find('.slick-slide:last').index();
                for (var i in visibleItems) {
                    if (num === visibleItems[i]) {
                        var found = true;
                    }
                }

                if (found === false) {
                    if (num > visibleItems[visibleItems.length - 1]) {
                        if (num == lastSlideIndex) {
                            $slider02.slick("slickGoTo", num - visibleItems.length + 1);
                        }

                        else {
                            $slider02.slick("slickGoTo", num - visibleItems.length + 2);
                        }
                    }
                    else {
                        if (num - 1 === -1) {
                            $slider02.slick("slickGoTo", 0);
                        }
                        else {
                            $slider02.slick("slickGoTo", num - 1);
                        }
                    }

                } else if (num === visibleItems[visibleItems.length - 1]) {
                    $slider02.slick("slickGoTo", visibleItems[1]);
                } else if (num === visibleItems[0]) {
                    $slider02.slick("slickGoTo", num - 1);
                }
            }
        });
    }

    OsProductThumbnailSlider____();     


 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
        


    });
})(jQuery); 