<template>
  <div style="position: absolute; top: 0"
       class="headline-container-inner text-xs-center">
    <h1 :class="{'headline mt-1': $vuetify.breakpoint.smAndDown}"
        :style="$vuetify.breakpoint.smAndDown
          ? 'font-size: 22px!important; margin-top: 8px!important; margin-bottom: 8px!important;'
          : ''"
        class="headline-1 primary--text">
      {{h1Text}}
    </h1>
    <h2 class="white--text px-3"
        :style="$vuetify.breakpoint.smAndDown ? 'font-size: 20px!important' : ''"
        :class="{'subheader': $vuetify.breakpoint.smAndDown}">{{h2Text}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'HomeIntroInner',
    computed: {
      h1Text () {
        return this.isDe
          ? 'WANDLEUCHTEN - LICHTOBJEKTE - LEUCHTKAESTEN' + (this.$vuetify.breakpoint.smAndUp ? ' - BELEUCHTETE PHOTOS & PAPIERE' : '')
          : 'WALL LIGHTS - LIGHTOBJECTS - LIGHT BOXES' + (this.$vuetify.breakpoint.smAndUp ? ' - ILLUMINATED PHOTOS & PAPERS' : '')
      },
      h2Text () {
        return this.isDe
          ? 'Handgefertigte Design-Leuchten' + (this.$vuetify.breakpoint.smAndUp ? ', Unikate aus Fotografien & Licht' : '')
          : 'Simple and beautiful design'
      }
    }
  }
</script>
