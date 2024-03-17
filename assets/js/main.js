document.addEventListener('DOMContentLoaded', function () { 
  new Swiper(".swiper", {
  slidesOffsetBefore: 120,
  a11y: true,
  navigation: {
    nextEl: ".swiper-button-next"
  },
  breakpoints: {
    320: {
      slidesPerView: 2.93,
      spaceBetween: 12,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    749: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    1024: {
      slidesPerView: 2.2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 2.8,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.87,
      spaceBetween: 32,
    },
  },
});
})
