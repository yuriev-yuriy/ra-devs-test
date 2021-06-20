console.log('im here');

$('.responsive').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  // slidesToShow: 1,
  // slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
