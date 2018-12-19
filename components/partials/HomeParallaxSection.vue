<template>
  <section
    v-if="$vuetify.breakpoint.mdAndUp"
    style="z-index: 0; position: relative">
    <parallax :speed-factor="0.2">
      <pl-img
        :quality="85"
        file-name="t0"
        img-type="jpg"
        sizes="100vw" />
      <div style="position: absolute; top: 0"
           class="headline-container-inner text-xs-center">
        <h1 v-if="isDe" class="headline-1">
          WANDLEUCHTEN - LICHTOBJEKTE - LEUCHTKAESTEN - BELEUCHTETE PHOTOS & PAPIERE
        </h1>
        <h1 v-else>WALL LIGHTS - LIGHTOBJECTS - LIGHT BOXES - ILLUMINATED PHOTOS & PAPERS</h1>

        <h2 v-if="isDe" class="white--text px-3">Handgefertigte Design-Leuchten, Unikate aus Fotografien & Licht</h2>
        <h2 v-else class="white--text px-3">Simple and beautiful design</h2>
      </div>
    </parallax>
  </section>
</template>

<script>
  import Parallax from 'vue-parallaxy'

  export default {
    name: 'HomeParallaxSection',
    components: {
      Parallax
    }
  }
</script>
