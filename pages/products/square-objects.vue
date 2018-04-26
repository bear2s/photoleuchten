<template>
  <div class="products">
    <v-layout
      row
      wrap>
      <v-flex xs12>
        <h1 class="text-xs-center">{{ $t('square_headline') }}</h1>
      </v-flex>

      <v-flex
        xs12
        class="text-xs-right">
        <pl-img
          blur-up
          file-name="q0"
          img-type="png"
          sizes="99vw"
          :quality="90"/>
      </v-flex>
      <v-flex xs12>
        <h2 class="text-xs-center">{{ $t('battery_powered') }}</h2>
      </v-flex>
      <v-flex
        xs12
        sm4
        v-for="(item, i) in ['q1', 'q2', 'q3', 'q4', 'q5', 'q6']"
        :key="item + i"
        style="position: relative"
        class="text-xs-justify pa-1">
        <pl-img
          :file-name="item"
          sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"/>
        <div
          class="text-xs-center"
          style="bottom: 10px; width: 100%; position: absolute;"
          v-if="i === 1">Salt & Pepper
        </div>
        <div
          class="text-xs-center"
          style="bottom: 10px; width: 100%; position: absolute;"
          v-if="i === 4">Beach I
        </div>
      </v-flex>
      <v-flex xs12>
        <p>{{ $t('quad_desc') }}</p>
      </v-flex>
    </v-layout>

    <v-layout
      row
      wrap
      class="mb-3">
      <v-flex
        xs12
        md8>
        <no-ssr>
          <ul
            class="card pl-3"
            style="height: 100%;">
            <li class="pt-3">{{ $t('battery_specs_headline') }}</li>
            <li
              v-for="(point, i) in $t(['battery_specs'])"
              :key="'---' + i">
              {{ point }}
            </li>
          </ul>
        </no-ssr>
      </v-flex>
      <v-flex
        xs12
        sm6
        md4
        class="pa-1 pb-0">
        <pl-img
          file-name="q7"
          sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"/>
      </v-flex>
    </v-layout>

    <v-layout
      row
      wrap
      class="justify-center mb-3">
      <v-flex xs12>
        <h2>
          {{ $t('products.selection') }}&nbsp;
          <toggle-button
            :value="quadMotivesLightOn"
            @change="onQuadMotivesLightOnChanged"
            :color="{checked: 'rgb(251, 176, 59)', unchecked: '#bfcbd9'}"
            :labels="{checked: $t('lightoff'), unchecked: $t('lighton')}"/>
        </h2>
      </v-flex>
      <v-flex
        xs6
        sm3
        md2
        class="center-xs motive-item pr-1 pb-1"
        v-for="(item, i) in quadMotives"
        :key="'quad-motive-' + i">
        <pl-img
          v-for="(subItem,s) in [{lightOnShow: false, fileNameEnd: 'a'}, {lightOnShow: true, fileNameEnd: 'b'}]"
          :key="item.label + '-' + s"
          @click.native="motifClicked(item.file)"
          class="list-item"
          :file-name="`${item.file}${subItem.fileNameEnd}`"
          v-show="quadMotivesLightOn === subItem.lightOnShow"
          style=":hover { cursor: pointer }"
          sizes="(max-width: 48em) 50vw, (min-width: 48em) 25vw, (min-width: 64em) 16vw, (max-width: 48em) 32vw"/>
        <div class="motive-label">{{ item.label }}</div>
      </v-flex>
    </v-layout>

    <v-dialog
      v-model="dialog"
      max-height="50vh"
      max-width="50vw">
      <div v-if="selectedMotif">
        <pl-img
          slot="body"
          :folder="'960'"
          :file-name="`${selectedMotif}a`"
          v-show="quadMotivesLightOn === false"
          sizes="70vw"/>
        <pl-img
          slot="body"
          :folder="'960'"
          :file-name="`${selectedMotif}b`"
          v-show="quadMotivesLightOn === true"
          sizes="70vw"/>
      </div>
    </v-dialog>

    <v-layout
      row
      wrap>
      <v-flex xs12>
        <h2 class="text-xs-center">{{ $t('line_powered') }}</h2>
      </v-flex>
      <v-flex
        xs12
        sm4
        v-for="(item, i) in ['q8', 'q9', 'q10', 'q11', 'q12', 'q13']"
        :key="item + '-' + i"
        class="text-xs-justify pa-1"
        style="position: relative;">
        <pl-img
          :file-name="item"
          :quality="85"
          sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"/>
        <div
          class="text-xs-center"
          style="bottom: 10px; width: 100%; position: absolute;"
          v-if="i === 1">La Pedrera
        </div>
        <div
          class="text-xs-center"
          style="bottom: 10px; width: 100%; position: absolute;"
          v-if="i === 4">Spirals of a temple
        </div>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <div><p>{{ $t('quad_linepower_desc') }}</p></div>
      </v-flex>
    </v-layout>
    <v-layout
      row
      wrap>
      <v-flex
        xs12
        md8
        class="mb-3">
        <ul
          class="card pl-3"
          style="height: 100%;">
          <p class="pt-3">{{ $t('battery_linepower_specs1_headline') }}</p>
          <li
            v-for="(point, i) in $t(['battery_linepower_specs1'])"
            :key="'battery-spec' + i">
            {{ point }}
          </li>
        </ul>
      </v-flex>
      <v-flex
        xs12
        sm6
        md4
        class="pa-1 pb-0">
        <pl-img
          file-name="q14"
          img-type="png"
          sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"/>
      </v-flex>
    </v-layout>
    <v-layout
      row
      wrap>
      <v-flex
        xs12
        md8
        class="mb-3">
        <ul
          class="card pl-3"
          style="height: 100%;">
          <p class="pt-3">{{ $t('battery_linepower_specs2_headline') }}</p>
          <li
            v-for="(point, i) in $t(['battery_linepower_specs2'])"
            :key="'battery-spec-second-' + i">
            {{ point }}
          </li>
        </ul>
      </v-flex>
      <v-flex
        xs12
        sm6
        md4
        class="pa-1 pb-0">
        <pl-img
          file-name="q15"
          img-type="png"
          sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"/>
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
        if (this.$vuetify.breakpoint.xsOnly) return
        this.selectedMotif = this.selectedMotif === name ? null : name
      }
    }
  }
</script>

<style scoped lang="stylus">
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

  @media screen and (max-width: 48em) {
    .motive-item .list-item {
      &:hover {
        cursor: default
      }
    }
  }
</style>
