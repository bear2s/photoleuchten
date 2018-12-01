<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <div v-swiper:aboutCarousel="swiperOption" @someSwiperEvent="onSwipe">
    <div class="swiper-wrapper">
      <div v-for="(banner, i) in banners" :key="i" class="swiper-slide">
        <pl-img
          :file-name="banner"
          img-type="jpg"
          sizes="320px" />
      </div>
    </div>
    <div slot="button-prev" class="swiper-button-prev" />
    <div slot="button-next" class="swiper-button-next" />
    <!--<div class="swiper-pagination" />-->
  </div>
</template>
<script>
  import Vue from 'vue'
  import 'swiper/dist/css/swiper.css'

  // If used in nuxt.js/ssr, you should keep it only in browser build environment
  if (process.browser) {
    const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
    Vue.use(VueAwesomeSwiper)
  }

  export default {
    name: 'AboutCarousel',
    data () {
      return {
        banners: ['a10', 'a11', 'a12'],
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          },
          pagination: {
            el: '.swiper-pagination'
          }
          // some swiper options...
        }
      }
    },
    mounted () {
      setTimeout(() => {
        this.banners.push('a13', 'a14', 'a15', 'a16', 'a17', 'a18')
      }, 1000)
    },
    methods: {
      onSwipe () {
        console.log('swipe')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .swiper-inner {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: contain;
    width: 320px;
    height: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    &.swiper-slide-active {
    }
  }
</style>
