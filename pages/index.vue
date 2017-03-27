<template>
  <div class="container">
    <div class="row middle-xs">
      <div class="col-xs-12 end-xs">
        <h2>Wandleuchten - Lichtobjekte - Photo + Licht</h2>
      </div>
    </div>
    <div class="row middle-xs">
      <div class="col-xs-12">
        <pl-img fileName="q1" sizes="100vw" :lazy="false"></pl-img>
      </div>
    </div>
    <div class="row middle-xs">
      <h3 class="col-xs-12">Quadratische Leuchtkästen</h3>
      <div v-for="(item, i) in quadImgs" :key="i" class="col-xs-6 col-sm-3">
        <pl-img :fileName="item" sizes="20vw" :lazy="true"></pl-img>
      </div>
    </div>
    <div class="row middle-xs">
      <h3 class="col-xs-12">Runde Lichtobjekte</h3>
      <div v-for="(item, i) in roundImgs" :key="i" class="col-xs-6 col-sm-3">
        <pl-img :fileName="item" sizes="32vw" :lazy="true"></pl-img>
      </div>
    </div>
  </div>
</template>

<script>
  import PlImg from '~components/PlImg.vue'

  export default {
    name: 'app',
    components: {
      PlImg
    },
    data () {
      return {
        nav2: false,
        quadImgs: ['q5', 'q2', 'q4', 'q3'],
        roundImgs: ['r1', 'r5', 'r6', 'r4', 'r3', 'r7']
      }
    }
  }
</script>
