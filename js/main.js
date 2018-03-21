(function($){

// FLEX SLIDER
    if($(".flexslider")[0]) { 
        $('.flexslider').flexslider(
            { 
                "directionNav" : true,
                "controlNav" : false,
                "animation" : "fade",
                "prevText" : "",
                "nextText" : "",
                "animationLoop" : true,
                "animationSpeed" : 600,
                "slideshowSpeed" : 4000
            }
        );
    }


    // RESTYLE THE DROPDOWN MENU
   /* var pillar =$('.pillar')
var header = $("#template");
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
       if (scroll >= window.innerHeight) {
          pillar.fadeOut('8000');
        }
    }); */


  $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},2000);
                    
            }
            
        }); 
    
    });

  /* Magnific popup */
  $('.perma-images').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});
   $('#street-content').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});





    $(".owl-carousel").owlCarousel({          
       loop:true,
        margin:0,
        nav:false,
        responsiveClass:true,
        autoplayHoverPause: false,
            autoplay: true,
            smartSpeed: 1500,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
        responsive:{
            0:{
                items:1,
                nav:false,
                loop:true
            },
            700:{
                items:3,
                nav:false,
                loop:true
            },
            1170:{
                items:3,
                nav:true,
                loop:true
            }
        }
      
      
    }); 
    $(".tolle-owl").owlCarousel({          
       loop:true,
        margin:0,
        nav:false,
        responsiveClass:true,
        autoplayHoverPause: false,
            autoplay: true,
            smartSpeed: 1500,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
        responsive:{
            0:{
                items:1,
                nav:false,
                loop:true
            },
            700:{
                items:3,
                nav:false,
                loop:true
            },
            1170:{
                items:3,
                nav:true,
                loop:true
            }
        }
      
      
    }); 
//music owl
$(".music-owl").owlCarousel({          
       loop:true,
        margin:0,
        nav:false,
        responsiveClass:true,
        autoplayHoverPause: false,
            autoplay: true,
            smartSpeed: 1500,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
        responsive:{
            0:{
                items:1,
                nav:false,
                loop:true
            },
            700:{
                items:1,
                nav:false,
                loop:true
            },
            1170:{
                items:1,
                nav:true,
                loop:true
            }
        }
      
      
    }); 
//hero-owl

$(".hero-owl").owlCarousel({          
       loop:true,
        margin:0,
        nav:false,
        responsiveClass:true,
        autoplayHoverPause: false,
            autoplay: true,
            smartSpeed: 1500,
            
        responsive:{
            0:{
                items:1,
                nav:false,
                loop:true
            },
            700:{
                items:1,
                nav:false,
                loop:true
            },
            1170:{
                items:1,
                nav:true,
                loop:true
            }
        }
      
      
    }); 
$( '.main-menu a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
          event.preventDefault();
    });
    /* back to top*/

    // ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

// 

$("#lang-menu").hover(
    function(){
        $(this).addClass("cls-border-lang");
        $(this).children().eq(0).addClass("cls-borderbottom-lang");
              $("#lang-menu ul").stop().slideToggle(100);
    },
    function(){
                $(this).removeClass("cls-border-lang");
        $(this).children().eq(0).removeClass("cls-borderbottom-lang");
        $("#lang-menu ul").stop().slideToggle(100);  
    }
  );
  /// click languages
  $("#lang-menu ul li").on("click", function(){
        //select lang and apply changes
        $lang = $(this).text();
        $("#lang-menu div").text($lang);
  });
})(jQuery)

