$(function(){
         //Preloader section Starts 
        $(window).on("load", function(){
            $("#preloader").fadeOut(3000);
        })
        //Preloader section Ends
    $(window).on("scroll", function(){ 
        //Sticky Menu Starts 
        var scrollPosition = $(window).scrollTop();
        if(scrollPosition > 0){
            $("#header").addClass("stickyNav");
        }else{
            $("#header").removeClass("stickyNav");
        }
        //Sticky Menu Ends 
        //Back To Top Starts 
        if(scrollPosition > 600){
            $("#backToTop").fadeIn(1000);
        }else{
            $("#backToTop").fadeOut(1000);
        }

    })
    $("#backToTop").on("click", function(){
        $("html,body").animate({
            scrollTop:0
        },3000);
    })
        //Back To Top Ends 
        //Smoth scroll section Starts 
        
        $('a').on('click', function(e) {
            e.preventDefault();
            if(this.hash != "") {
                var hash = $(this.hash)
                $('html,body').animate({
                    scrollTop:$(hash).offset().top-120
                }, 2000)
            }
        })
        //Smoth scroll section  Ends 
        //Counterup section 
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        //Client Slider section 
        $('.client-slider').slick({
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<i class="fas fa-chevron-left  client-btn"></i>',
            nextArrow: '<i class="fas fa-chevron-right client-btn"></i>',
          });
          //Blog slider section 
        $('.blog-slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<i class="fas fa-chevron-left  blog-btn"></i>',
            nextArrow: '<i class="fas fa-chevron-right blog-btn"></i>',
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1
          }); 
          //partner section
          $('.partner-area').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: false,
            nextArrow: false
          });
})