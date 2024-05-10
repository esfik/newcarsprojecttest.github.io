import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'



const swiper = new Swiper(".swiper", {
 
  effect: "fade",
   pagination: {
     el: ".swiper-pagination",
   },
   autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    Infinity:true,
  },
 });  