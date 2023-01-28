window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('down',window.scrollY> 0);
});

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.navegation');

navToggle.addEventListener('click', () =>{
    navMenu.classList.toggle('active');
});


/**Testimonial */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },


    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      650:{
        slidesPerView: 2,
      },
      950:{
        slidesPerView: 3,
      },
    },
  });