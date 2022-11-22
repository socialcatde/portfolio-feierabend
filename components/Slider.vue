<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

export default {
  props: ["werkBilder"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
};
</script>

<template>
  <swiper
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :spaceBetween="30"
    navigation
    :modules="modules"
    class="mySwiper"
    :style="{ position: 'unset' }"
  >
    <swiper-slide v-for="(item, i) in werkBilder" :key="`slice-item-${i}`">
      <prismic-image :field="item.bild" />
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper {
  height: 100%;
  max-height: 80vh;
  padding-right: 16px;
  padding-left: 16px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 615px) {
  .swiper {
    width: auto;
    padding: 0 16px;
  }
}
</style>
