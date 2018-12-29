<template>
  <section style="position: relative">
    <v-parallax
      v-if="$vuetify.breakpoint.mdAndUp"
      dark
      :height="wh"
      :src="`https://res.cloudinary.com/stbaer/image/upload/f_auto,q_auto,dpr_auto,w_${ww}/t0.jpg?${bust}`"/>
    <template v-else>
      <pl-img
        :quality="95"
        file-name="t0"
        img-type="jpg"
        :height="wh"
        :width="ww"
        sizes="100vw" />
    </template>
  </section>
</template>

<script>
  import pkg from '../../package.json'

  const bust = pkg.version

  export default {
    name: 'HomeParallaxSection',
    data () {
      return {
        bust: bust
      }
    },
    computed: {
      ww () {
        if (process.server) return 10
        else if (window && window.innerWidth <= 400) return 400
        else if (window && window.innerWidth <= 600) return 600
        else if (window && window.innerWidth <= 800) return 800
        else if (window && window.innerWidth <= 1000) return 1000
        else if (window && window.innerWidth <= 1200) return 1200
        else if (window && window.innerWidth <= 1400) return 1400
        else if (window && window.innerWidth <= 1600) return 1600
        else if (window && window.innerWidth <= 1800) return 1800
        else if (window && window.innerWidth <= 2000) return 2000
        else if (window && window.innerWidth <= 2400) return 2400
        else if (window && window.innerWidth <= 2800) return 2800
        else return 'auto'
      },
      wh () {
        if (process.server) return 500
        return ((window && window.innerHeight)) || 500
      }
    }
  }
</script>

<style scoped>
  .sm-down {

  }
</style>
