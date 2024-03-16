document.addEventListener('DOMContentLoaded', function () { 
  new Swiper(".swiper", {
  loop: true,
  a11y: true,
  navigation: {
    nextEl: ".swiper-button-next"
  },
  breakpoints: {
    320: {
      slidesPerView: 2.18,
      spaceBetween: 12,
    },
    480: {
      slidesPerView: 2.2,
      spaceBetween: 12,
    },
    749: {
      slidesPerView: 2.99,
      spaceBetween: 12,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 2.4,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.41,
      spaceBetween: 32,
    },
  },
});
})
