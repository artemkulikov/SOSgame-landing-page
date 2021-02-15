//Функция проверки поддержки браузером WEBP

function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});

//_________________________________________________________________________________

$(function () {

  $('.slider').slick({
    prevArrow: '<button class="slider-btn slider-btn__left"><svg width="18" height="39" viewBox="0 0 18 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82153 2.65635L1.82153 36.7297L15.5642 19.8838L1.82153 2.65635Z" stroke="white" stroke-width="3.36454" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn__right"><svg width="18" height="39" viewBox="0 0 18 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82153 2.65635L1.82153 36.7297L15.5642 19.8838L1.82153 2.65635Z" stroke="white" stroke-width="3.36454" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      },
    ]
  });

  $('.features__info-title').on('click', function () {
    $(this).children('.features__drop-down').toggleClass('active');
  });

  $('.header__menu-btn').on('click', function () {
    $(this).toggleClass('header__menu-btn-active');
  });

  $('.header__menu-btn').on('click', function () {
    $('.menu__list').slideToggle();
  });


});
