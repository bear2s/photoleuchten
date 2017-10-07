<template>
  <div class="container">

    <div class="row middle-xs center-xs product-types">
      <div class="col-xs-4 button"
          :class="{'active': selectedProduct === 'quad'}"
          @click="selectProduct('quad')">{{$t('quad_headline')}}</div>
      <div class="col-xs-4 button"
          :class="{'active': selectedProduct === 'round'}"
          @click="selectProduct('round')">{{$t('products.round.headline')}}</div>
      <div class="col-xs-4 button"
          :class="{'active': selectedProduct === 'framed'}"
          @click="selectProduct('framed')">{{$t('products.framed.headline')}}</div>
    </div>

    <transition name="component-fade" mode="out-in">
      <component :is="computedSelectedProduct"></component>
    </transition>
  </div>
</template>

<script>
  import QuadObjects from '~/components/QuadObjects.vue'
  import RoundObjects from '~/components/RoundObjects.vue'
  import FramedObjects from '~/components/FramedObjects.vue'

  export default {
    transition: 'slide-left',
    components: {
      QuadObjects, RoundObjects, FramedObjects
    },
    data () {
      return {
        selectedProduct: 'quad'
      }
    },
    computed: {
      computedSelectedProduct () {
        return this.selectedProduct + '-objects'
      }
    },
    methods: {
      selectProduct (name = 'quad') {
        this.selectedProduct = name
      }
    },
    i18n: {
      messages: {
        en: {
          quad_headline: 'Square Lightboxes'
        },
        de: {
          quad_headline: 'Quadratische Leuchtkästen'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .product-types{
    .button {
      padding-top: 1rem;
      padding-bottom: 1rem;
      text-transform: uppercase;
      &.active {
        border: 1px solid;
      }
      &:not(.active){
        border: 1px transparent;
        opacity: 0.6;
      }
      transition: all 0.5s ease-in-out;
    }
  }
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to{
    opacity: 0;
  }
  @media all and (max-width: 400px){
    .product-types >.button{
      flex-basis: 100%;
      max-width: 100%;
    }
  }

</style>
