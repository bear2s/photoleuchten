<template>
  <div class="products">
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="text-xs-center">{{$t('square_headline')}}</h1>
      </v-flex>

      <v-flex xs12 class="text-xs-right">
        <pl-img fileName="q0"
                imgType="png"
                sizes="99vw"
                :quality="85"></pl-img>
      </v-flex>
      <v-flex xs12>
        <h2 class="text-xs-center">{{$t('battery_powered')}}</h2>
      </v-flex>
      <v-flex xs4 v-for="(item, i) in ['q1', 'q2', 'q3', 'q4', 'q5', 'q6']" :key="i"
              style="position: relative"
              class="text-xs-justify pa-1">
        <pl-img :fileName="item" sizes="32vw"></pl-img>
        <div class="text-xs-center"
             style="bottom: 10px; width: 100%; position: absolute;" v-if="i === 1">Salt & Pepper</div>
        <div class="text-xs-center"
             style="bottom: 10px; width: 100%; position: absolute;" v-if="i === 4">Beach I</div>
      </v-flex>
      <v-flex xs12>
        <p>{{$t('quad_desc')}}</p>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mb-3">
      <v-flex xs12 md8>
        <ul class="card pl-3" style="height: 100%;">
          <p class="pt-3">{{$t('battery_specs_headline')}}</p>
          <li v-for="(point, i) in $t(['battery_specs'])" :key="i">
            {{point}}
          </li>
        </ul>
      </v-flex>
      <v-flex xs12 sm6 md4 class="pa-1 pb-0">
        <pl-img fileName="q7" sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"></pl-img>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="justify-center mb-3">
      <v-flex xs12>
        <h2>
          {{$t('products.selection')}}&nbsp;
          <toggle-button :value="quadMotivesLightOn"
                         @change="onQuadMotivesLightOnChanged"
                         :color="{checked: 'rgb(251, 176, 59)', unchecked: '#bfcbd9'}"
                         :labels="{checked: $t('lightoff'), unchecked: $t('lighton')}"/>
        </h2>
      </v-flex>
      <v-flex xs4 sm3 md2
              class="center-xs motive-item pr-1 pb-1"
              v-for="(item, i) in quadMotives" :key="i">
        <pl-img
          v-for="(subItem,s) in [{lightOnShow: false, fileNameEnd: 'a'}, {lightOnShow: true, fileNameEnd: 'b'}]"
          :key="s"
          @click.native="motifClicked(item.file)"
          class="list-item"
          :fileName="`${item.file}${subItem.fileNameEnd}`"
          v-show="quadMotivesLightOn === subItem.lightOnShow"
          style=":hover { cursor: pointer }"
          sizes="(min-width: 64em) 16vw, (min-width: 48em) 25vw, (max-width: 48em) 32vw"></pl-img>
        <div class="motive-label">{{item.label}}</div>
      </v-flex>
    </v-layout>

    <v-dialog v-model="dialog"
              max-height="50vh"
              max-width="50vw">
      <div v-if="selectedMotif">
        <pl-img
          slot="body"
          :folder="'960'"
          :fileName="`${selectedMotif}a`"
          v-show="quadMotivesLightOn === false"
          sizes="70vw"></pl-img>
        <pl-img
          slot="body"
          :folder="'960'"
          :fileName="`${selectedMotif}b`"
          v-show="quadMotivesLightOn === true"
          sizes="70vw"></pl-img>
      </div>
    </v-dialog>

    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="text-xs-center">{{ $t('line_powered') }}</h2>
      </v-flex>
      <v-flex xs4 v-for="(item, i) in ['q8', 'q9', 'q10', 'q11', 'q12', 'q13']" :key="i"
              class="text-xs-justify pa-1" style="position: relative;">
        <pl-img :fileName="item"
                :quality="85"
                sizes="32vw"></pl-img>
        <div class="text-xs-center"
             style="bottom: 10px; width: 100%; position: absolute;" v-if="i === 1">La Pedrera</div>
        <div class="text-xs-center"
             style="bottom: 10px; width: 100%; position: absolute;" v-if="i === 4">Spirals of a temple</div>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <div><p>{{$t('quad_linepower_desc')}}</p></div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md8 class="mb-3">
        <ul class="card pl-3"
            style="height: 100%;">
          <p class="pt-3">{{$t('battery_linepower_specs1_headline')}}</p>
          <li v-for="(point, i) in $t(['battery_linepower_specs1'])" :key="i">
            {{point}}
          </li>
        </ul>
      </v-flex>
      <v-flex xs12 sm6 md4 class="pa-1 pb-0">
        <pl-img fileName="q14"
                imgType="png"
                sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"></pl-img>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md8 class="mb-3">
        <ul class="card pl-3" style="height: 100%;">
          <p class="pt-3">{{$t('battery_linepower_specs2_headline')}}</p>
          <li v-for="(point, i) in $t(['battery_linepower_specs2'])" :key="i">
            {{point}}
          </li>
        </ul>
      </v-flex>
      <v-flex xs12 sm6 md4 class="pa-1 pb-0">
        <pl-img fileName="q15"
                imgType="png"
                sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"></pl-img>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
  const motiveLabels = {
    21: 'Salt & Pepper',
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
    32: 'Tree III'
  }

  export default {
    transition: 'slide-left',
    asyncData ({store, route}) {
      return store.dispatch('setLanguageKey', route.name === 'products-square-objects' ? 'en' : 'de')
    },
    data () {
      return {
        dialog: false,
        selectedMotif: null,
        quadMotivesLightOn: false,
        showModal: false
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
    watch: {
      selectedMotif (newVal, oldVal) {
        this.dialog = !!newVal
        if (!newVal && !!oldVal) {
          this.selectedMotif = null
        }
      }
    },
    methods: {
      onQuadMotivesLightOnChanged (ev) {
        this.quadMotivesLightOn = ev.value
      },
      motifClicked (name) {
        this.selectedMotif = this.selectedMotif === name ? null : name
      }
    }
  }
</script>

<style scoped>
  .motive-item .list-item {
    height: auto;
    width: 100%;
  }

  .motive-item .list-item:hover {
    cursor: pointer;
  }

  .modal-body img {
    max-width: 90vw;
    max-height: 90vh;
  }
</style>
