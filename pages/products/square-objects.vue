<template>
  <div>
    <v-layout row>
      <v-flex xs12 class="text-xs-left">
        <h4 class="subheading">{{$t('battery_powered')}}</h4>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="(item, i) in ['q1', 'q2', 'q3', 'q4', 'q5', 'q6']" :key="i"
              xs4 class="text-xs-justify">
        <pl-img :fileName="item" sizes="33vw"></pl-img>
      </v-flex>
      <v-flex xs12>
        <div v-html="$t('quad_desc')"></div>
      </v-flex>
    </v-layout>


    <h4>{{$t('products.specs')}}</h4>
    <v-layout row wrap>
      <v-flex xs12 sm8>
        <p v-html="$t('specs_description')"></p>
      </v-flex>
      <v-flex xs12 sm4>
        <pl-img fileName="q7" sizes="33vw"></pl-img>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs8>
        <h4>
          {{$t('products.selection')}}&nbsp;
          <toggle-button :value="quadMotivesLightOn"
                         @change="onQuadMotivesLightOnChanged"
                         :color="{checked: 'rgb(251, 176, 59)', unchecked: '#bfcbd9'}"
                         :labels="{checked: $t('lightoff'), unchecked: $t('lighton')}"/>
        </h4>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="justify-center">
      <v-flex xs4 sm3 md2
              class="center-xs motive-item pr-1"
              v-for="(item, i) in quadMotives" :key="i"
              @click="motifClicked(item.file)">
        <pl-img
          v-for="(subItem,s) in [{lightOnShow: false, fileNameEnd: 'a'}, {lightOnShow: true, fileNameEnd: 'b'}]"
          :key="s"
          class="list-item button"
          :folder="'960'"
          :fileName="`${item.file}${subItem.fileNameEnd}`"
          v-show="quadMotivesLightOn === subItem.lightOnShow"
          sizes="(min-width: 64em) 16vw, (min-width: 48em) 25vw, (max-width: 48em) 33vw"></pl-img>
        <div class="motive-label">{{item.label}}</div>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>

      <v-dialog v-model="dialog"
                max-height="50vh" max-width="50vw" width="600px">
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
    </v-layout>

    <div class="row middle-xs">
      <div class="col-xs-12">
        <h4 class="">{{ $t('line_powered') }}</h4>
        <p>{{ $t('coming_soon') }}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import ToggleButton from '~/components/ToggleButton.vue'

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
    components: {
      ToggleButton
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
    },
    i18n: {
      messages: {
        en: {
          'battery_powered': 'battery-powered',
          'line_powered': 'line-powered',
          quad_desc: `
<p>The square light boxes are battery powered and very flexible - they can be hung on the wall, placed on the floor or on a shelf.
As motifs, there are detailed photographs, e.g. "Salt & Pepper" or different nature photographs.
The motif is printed on an acrylic glass plate and fixed from the inside with picture clips. It can be replaced easily. Each frame is a single piece of carpentry.</p>
`,
          'specs_description': `
Handmade individual item<br/>
<span class="desc_point">Frame:</span> white painted wood<br/>
<span class="desc_point">Dimensions:</span> 42 cm x 42 cm x 8 cm<br/>
<span class="desc_point">Image:</span> photo print on perspex 30 cm x 30 cm<br/>
<span class="desc_point">Lighting:</span> battery powerd LED array<br/>
Motif can be easily changed<br/>
<span class="desc_point">Price:</span> 240 €`
        },
        de: {
          battery_powered: 'batteriebetrieben',
          line_powered: 'netzbetrieben',
          quad_desc:
            `
<p>Die quadratischen Leuchtkästen sind batteriebetrieben und sehr flexibel - sie können an die Wand gehängt, auf den Boden oder auf ein Regal gestellt werden.
Als Motive gibt es Detailfotografien, wie z.B. "Salt & Pepper" oder verschiedene Naturaufnahmen.
Das Motiv ist auf einer Acrylglasplatte gedruckt und von innen mit Bilderklemmen befestigt. Es kann jederzeit ausgetauscht werden. Jeder Rahmen ist ein schreinergefertigtes Einzelstück.</p>
`,
          specs_description: `
Handgefertigtes Einzelstück<br/>
<span class="desc_point">Rahmen:</span> Holzrahmen weiss lackiert<br/>
<span class="desc_point">Abmessungen:</span> 42 cm x 42 cm x 8 cm<br/>
<span class="desc_point">Bild:</span> Fotodruck auf Acrylglas 30 cm x 30 cm<br/>
<span class="desc_point">Beleuchtung:</span> batteriebetriebene weisse LEDs (Monobatterien 3 St.)<br/>
Motiv kann gewechselt werden<br/>
<span class="desc_point">Preis:</span> 240 €`
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .motive-item {
    padding-bottom: 1rem;
    .list-item {
      height: auto;
      width: 100%;
    }
  }

  .modal-body {
    img {
      max-width: 90vw;
      max-height: 90vh;
    }
  }
</style>
