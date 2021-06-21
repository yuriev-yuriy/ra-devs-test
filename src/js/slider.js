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
      breakpoint: 2500,
      settings: {
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
