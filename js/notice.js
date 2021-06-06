$(document).ready(function () {
  const swiper11 = new Swiper('#tabpanel11 .swiper-container', {
      // Optional parameters
      direction: 'vertical',

      // Navigation arrows
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      observer: true,
      observeParents: true //해당 요소와 부모 요소를 감지하여 DOM에 변화가 있으면 swiper를 초기화하여 문제를 해결
  });
  const swiper12 = new Swiper('#tabpanel12 .swiper-container', {
      // Optional parameters
      direction: 'vertical',

      // Navigation arrows
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      observer: true,
      observeParents: true
  });
  const swiper13 = new Swiper('#tabpanel13 .swiper-container', {
      // Optional parameters
      direction: 'vertical',

      // Navigation arrows
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      observer: true,
      observeParents: true
  });
  const swiper14 = new Swiper('#tabpanel14 .swiper-container', {
      // Optional parameters
      direction: 'vertical',

      // Navigation arrows
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      observer: true,
      observeParents: true
  });
  const swiper21 = new Swiper('#tabpanel21 .swiper-container', {

      // If we need pagination
      pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
      },

      // Navigation arrows
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      observer: true,
      observeParents: true
  });
});