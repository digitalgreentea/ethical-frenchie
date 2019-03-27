// Swiper: http://www.idangero.us/swiper/
import {
  Swiper,
  Autoplay,
  Navigation,
  Pagination,
} from 'swiper/dist/js/swiper.esm';

// Install modules
Swiper.use([Autoplay, Navigation, Pagination]);

const swiperHero = new Swiper(`.swiper-hero`, {
  autoplay: {
    delay: 5000,
  },
});
const swiperTes = new Swiper(`.swiper-testimonials`, {
  allowTouchMove: true,
  initialSlide: 0,
  navigation: {
    nextEl: `.swiper-button-next`,
    prevEl: `.swiper-button-prev`,
  },
  slidesPerView: 1,
});
