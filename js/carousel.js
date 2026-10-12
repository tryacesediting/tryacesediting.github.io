jQuery(document).ready(function($) {
  $('.logo-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 12000,
        arrows: false,
        variableWidth: true,
        cssEase: 'linear',
        dots: false,
          pauseOnHover: false,
          responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            speed: 5000
          }
        }, {
          breakpoint: 520,
          settings: {
            slidesToShow: 2,
            speed: 5000,
      }
    }]
  });
});

jQuery(document).ready(function($) {
  $('.testimonials-container').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 8000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
          }
        }
      ]
    });
});