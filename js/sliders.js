const portfolioSlider = new Swiper(".portfolio-section__slider", {
   slidesPerView: 3,
   spaceBetween: 30,

   navigation: {
     nextEl: '.portfolio-section__prev',
     prevEl: '.portfolio-section__next',
  },
});

const testimonialsSlider = new Swiper(".testimonials__slider", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   navigation: {
     nextEl: '.testimonials__prev',
     prevEl: '.testimonials__next',
  },
});



