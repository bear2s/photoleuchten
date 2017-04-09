<template>
  <div>
    <div class="row middle-xs transitionable">

      <div v-for="(item, i) in ['q5', 'q4', 'q2', 'q3']" :key="i"
           class="col-xs-3">
        <pl-img :fileName="item" sizes="20vw"></pl-img>
      </div>
    </div>
    <div class="row middle-xs transitionable">
      <h4 class="col-xs-12">Motivauswahl</h4>
    </div>
    <div class="row middle-xs">
      <div v-for="(item, i) in quadMotives" :key="i"
           @click="toggleActiveMotive(item.file)"
           :class="{active: selectedMotive === item.file}"
           class="col-xs-4 col-sm-3 col-md-2 center-xs motive-item">
          <pl-img
            class="list-item button"
            :folder="'960'"
            :fileName="`${item.file}a`"
            v-show="selectedMotive !== item.file"
            sizes="30vw"></pl-img>
          <pl-img
            class="list-item button"
            :folder="'960'"
            v-show="selectedMotive === item.file"
            :fileName="`${item.file}b`"
            sizes="30vw" :lazy="false"></pl-img>

        <div class="motive-label">{{item.label}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  const motiveLabels = {
    21: 'Salt & pepper',
    22: 'Macarons',
    23: 'Tea',
    24: 'Beach I',
    25: '2Blue',
    26: 'Clouds',
    27: 'Mushroom I',
    28: 'Mushroom II',
    29: 'Rice',
    30: 'Tree I',
    31: 'Tree II',
    32: 'Tree II'
  }

  export default {
    data () {
      return {
        selectedMotive: null
      }
    },
    computed: {
      quadMotives () {
        const motives = []
        for (let i = 21; i < 33; i++) {
          motives.push({
            file: `q${i}_`,
            label: motiveLabels[i]
          })
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

<style lang="less" scoped>
  .motive-item {
    padding-bottom: 1rem;
    .list-item{
      height: auto;
      width: 100%;
    }
  }
</style>
