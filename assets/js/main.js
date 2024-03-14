document.addEventListener('DOMContentLoaded', function () { 
  new Swiper(".swiper", {
  loop: true,
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
    640: {
      slidesPerView: 2.2,
      spaceBetween: 12,
    },
    1024: {
      slidesPerView: 2.7,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.41,
      spaceBetween: 32,
    },
  },
});
})
