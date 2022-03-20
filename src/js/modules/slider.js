// инициализация slider
new Swiper('.reviews-slider', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  simulateTouch: false,
  touchRatio: 2,
  autoHeight: true,

  //Кол слайдов
  slidesPerView: 1,

  watchOverflow: true,

  // бесконечность
  loop: true,

  effect: 'flip',
  speed: 800,
});