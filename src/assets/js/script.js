// toggle js 
function toggleActive(Id, db) {
    var element = document.querySelector(Id);
    element.classList.toggle(db);
    }
// toggle js 
// swiper js 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 7.5,
        spaceBetween: 30,
      },
    },
  });
//   swiper js 