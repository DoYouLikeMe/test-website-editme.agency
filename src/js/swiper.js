import Swiper from "swiper";
import {Navigation, Autoplay} from "swiper/modules";
// import Swiper and modules styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
  loop: true,
  modules: [Navigation, Autoplay],

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  disableOnInteraction: false,
  speed: 3000,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 1,
});
