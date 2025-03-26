const portSlider = document.querySelector('.portfolio-section__slider')

const portfolioSlider = new Swiper(portSlider, {
   slidesPerView: 3,
   spaceBetween: 30,
  //  loop: true,
  //  on: {
  //   init: function () {
  //   console.log('slide init');

  //   const activeSlide = portSlider.querySelector('.swiper-slide-active');
  //   const followingActiveSlide = activeSlide.nextElementSibling;
  //   const nextActiveSlide = followingActiveSlide.nextElementSibling;

  //   activeSlide.classList.add('slider-visible');
  //   followingActiveSlide.classList.add('slider-visible');
  //   nextActiveSlide.classList.add('slider-visible');
  //   },
  // },
   navigation: {
     nextEl: '.portfolio-section__prev',
     prevEl: '.portfolio-section__next',
  },
 
 });



// portfolioSlider.on('slideChange', function () {
//   console.log('slide changed');

//   const activeSlide = portSlider.querySelector('.swiper-slide-next');
//     const followingActiveSlide = activeSlide.nextElementSibling;
//     const nextActiveSlide = followingActiveSlide.nextElementSibling;

//     document.querySelectorAll('.portfolio-section__slider .swiper-slide').forEach(el => {
//       el.classList.remove('slider-visible')
//     })

//     activeSlide.classList.add('slider-visible');
//     followingActiveSlide.classList.add('slider-visible');
//     nextActiveSlide.classList.add('slider-visible');
// });

// document.querySelector('.portfolio-section__prev').addEventListener('click', () => {
//   const activeSlide = portSlider.querySelector('.swiper-slide-next');

//   if (activeSlide.previousElementSibling) {
//     const followingActiveSlide = activeSlide.previousElementSibling;
//     followingActiveSlide.classList.add('slider-visible');
//   }
// });

// document.querySelector('.portfolio-section__next').addEventListener('click', () => {
//   const activeSlide = portSlider.querySelector('.swiper-slide-active');
//     const followingActiveSlide = activeSlide.nextElementSibling;
//     const nextActiveSlide = followingActiveSlide.nextElementSibling;

//     document.querySelectorAll('.portfolio-section__slider .swiper-slide').forEach(el => {
//       el.classList.remove('slider-visible')
//     });

//     activeSlide.classList.add('slider-visible');
//     followingActiveSlide.classList.add('slider-visible');
//     nextActiveSlide.classList.add('slider-visible');
// });