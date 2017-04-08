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
      <div v-for="(item, i) in ['q5', 'q2', 'q4', 'q3']" :key="i" class="col-xs-6 col-sm-3">
        <pl-img :fileName="item" sizes="20vw"></pl-img>
      </div>
    </div>

    <div class="row middle-xs">
      <h4 class="col-xs-12">Motivauswahl</h4>
      <div v-for="(item, i) in quadMotives" :key="i" class="col-xs-4 col-sm-3 col-md-2">
        <pl-img
          width="100%" height="auto"
          :folder="'960'"
          :fileName="`${item.file}a`"
          v-show="selectedMotive !== item.file"
          @click.native="toggleActiveMotive(item.file)"
          sizes="30vw"></pl-img>
        <pl-img
          width="100%" height="auto"
          :folder="'960'"
          v-show="selectedMotive === item.file"
          :fileName="`${item.file}b`"
          @click.native="toggleActiveMotive(item.file)"
          sizes="30vw" :lazy="false"></pl-img>
      </div>
    </div>

    <div class="row middle-xs center-xs">
      <h3 class="col-xs-12">Runde Lichtobjekte</h3>
      <div class="col-xs-offset-6 col-xs-3">
      </div>
      <div class="col-xs-3">
        <pl-img fileName="r0" imgType="png" sizes="25v"></pl-img>
      </div>
    </div>
    <div class="row middle-xs">
      <div class="col-xs-12">
        <pl-img fileName="r4" sizes="100v"></pl-img>
      </div>
      <div v-for="(item, i) in ['r1', 'r5']" :key="i" class="col-xs-6 col-sm-3">
        <pl-img :fileName="item" sizes="32vw"></pl-img>
      </div>
    </div>
    <div class="row middle-xs center-xs">
      <h4 class="">Leuchte rund<br/>
        bespannt mit Japanpapier<br>
        Beleuchtung: RGB LED's mit Farbwechsel, dimmbar<br/>
        Rahmen Holz, Schlagmetall Kuper</h4>
      <div class="col-xs-12">
        <pl-img file-name="r3" sizes="100v"></pl-img>
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
        selectedMotive: null
      }
    },
    computed: {
      quadMotives () {
        const motives = []
        for (let i = 21; i < 32; i++) {
          motives.push({file: `q${i}_`})
        }
        return motives
      }
    },
    methods: {
      toggleActiveMotive (name) {
        this.selectedMotive = this.selectedMotive === name ? null : name
      }
    }
  }
</script>
