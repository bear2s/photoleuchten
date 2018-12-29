<template>
  <div class="text-xs-center">
    <h1>
      {{h1Text}}
    </h1>
    <h2 class="px-3">{{h2Text}}</h2>
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
