<template>
  <div class="container">

    <div class="row middle-xs center-xs">
      <h3 class="col-xs-6 button"
          :class="{'active': selectedProduct === 'quad'}"
          @click="selectProduct('quad')">Quadratische Leuchtkästen</h3>
      <h3 class="col-xs-6 button"
          :class="{'active': selectedProduct === 'round'}"
          @click="selectProduct('round')">Runde Lichtobjekte</h3>
    </div>

    <transition name="component-fade" mode="out-in">
      <component :is="computedSelectedProduct"></component>
    </transition>
  </div>
</template>

<script>
  import QuadObjects from '~components/QuadObjects.vue'
  import RoundObjects from '~components/RoundObjects.vue'

  export default {
    transition: 'slide-left',
    components: {
      QuadObjects, RoundObjects
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
    }
  }
</script>

<style lang="less" scoped>
  h3.button {
    padding-top: 1rem;
    padding-bottom: 1rem;
    &.active {
      border: 1px solid;
    }
    &:not(.active){
      opacity: 0.6;
    }
    transition: all 0.5s ease-in-out;
  }

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to{
    opacity: 0;
  }

</style>
