
$(window).on('load', function () {
  setTimeout(function () {
    $('#preloader').fadeOut();
  }, 200);
});
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("topBtn").addEventListener("click", function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
$("#colorful").colorfulTab(); 


$(window).scroll(function(){
 var scrolling = $ (this).scrollTop()
  if(scrolling > 500) {
  $(".navbar").addClass("navbg")
 }
})



$('.banner_main').slick({
    nextArrow:".next",
    prevArrow:".prev",
    dots:true

});

    
   

      new VenoBox({
        selector: ".my-video-links"


        
    });

    $('.testimonial_manu').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      speed:500,
      arrows:false,
      dots:true,
      responsive: [
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            speed:500,
            arrows:false,
            dots: true
          }
        },
        {
          breakpoint: 766.98,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed:500,
            arrows:false,
            dots:true
          }
        },
        {
          breakpoint:  575.98,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed:500,
            arrows:false,
            dots:true
          }
        }
      
      ]
    });

    $('.counter').counterUp({
        delay: 10,
        time: 10000
    });


    $('.partners_inner').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 5,
      nextArrow:".next",
      prevArrow:".prev",
        responsive: [
          {
            breakpoint: 575.98,
            settings: {
              centerMode: true,
              slidesToShow: 1,
      
       
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 2,
              nextArrow:".next",
              prevArrow:".prev",
       
            }
          },
          {
            breakpoint: 991.98,
            settings: {
              centerMode: true,
      centerPadding: '0px',
      slidesToShow: 4,
      nextArrow:".next",
      prevArrow:".prev",
       
            }
          },
          {
            breakpoint: 1200,
            settings: {
              centerMode: true,
      centerPadding: '0px',
      slidesToShow: 5,
      nextArrow:".next",
      prevArrow:".prev",
            }
          }
        ]
      });
    