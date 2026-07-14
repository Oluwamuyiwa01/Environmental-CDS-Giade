// CURRENT MEMBERS
var currentSwiperr = new Swiper(".currentSwiper", {
      slidesPerView:3,
      spaceBetween:10,
      loop: true,
      centeredSlides:false,
      fade:true,
      grabCursor: true,
      pagination: {
        el: ".current-pagination",
        clickable: true,
        dynamicBullets: 'true',
      },
      navigation: {
        nextEl: ".current-next",
        prevEl: ".current-prev",
      },
       breakpoints:{
      0:{
        slidesPerView: 1,
      },
     520:{
        slidesPerView: 2,
      },
      950:{
        slidesPerView: 3,
      },
    },
      
    });

    // OLD MEMBERS

    var oldSwiper = new Swiper(".oldSwiper", {
      slidesPerView:4,
      spaceBetween:10,
      loop: true,
      centeredSlides:false,
      fade:true,
      grabCursor: true,
      pagination: {
        el: ".old-pagination",
        clickable: true,
        dynamicBullets: 'true',
      },
      navigation: {
        nextEl: ".old-next",
        prevEl: ".old-prev",
      },
       breakpoints:{
      0:{
        slidesPerView: 1,
      },
     520:{
        slidesPerView: 2,
      },
      950:{
        slidesPerView: 3,
      },
    },
      
    });

    // PHOTO GALLERY

    var photoGallery = new Swiper(".photo-gallery", {
      slidesPerView:3,
      spaceBetween:15,
      loop: true,
      centeredSlides:false,
      fade:true,
      grabCursor: true,
      pagination: {
        el: ".gallery-pagination",
        clickable: true,
        dynamicBullets: 'true',
      },
      navigation: {
        nextEl: ".gallery-next",
        prevEl: ".gallery-prev",
      },
       breakpoints:{
      0:{
        slidesPerView: 1,
      },
     520:{
        slidesPerView: 2,
      },
      950:{
        slidesPerView: 3,
      },
    },
      
    });