<template>
  <div>
    <div class="row middle-xs">
      <h4 class="col-xs-12">{{$t('products.quad.battery_powered')}}</h4>
    </div>
    <div class="row middle-xs transitionable">

      <div v-for="(item, i) in ['q1', 'q2', 'q3']" :key="i"
           class="col-xs-4">
        <pl-img :fileName="item" sizes="33vw"></pl-img>
      </div>
      <div v-for="(item, i) in ['q4', 'q5', 'q6']" :key="i"
           class="col-xs-4">
        <pl-img :fileName="item" sizes="33vw"></pl-img>
      </div>
    </div>
    <br>
    <div class="row middle-xs">
      <div class="col-xs-8">
        <h4>{{$t('products.specs')}}</h4>
        <p v-html="$t('products.quad.specs_description')"></p>
      </div>
      <div class="col-xs-4">
        <pl-img fileName="q7" sizes="33vw"></pl-img>
      </div>
    </div>
    <div class="row middle-xs transitionable">
      <h4 class="col-xs-8">{{$t('products.selection')}}</h4>
      <div class="col-xs-4 end-xs">
        <toggle-button :value="quadMotivesLightOn"
                       @change="onQuadMotivesLightOnChanged"
                       :color="{checked: 'rgb(251, 176, 59)', unchecked: '#bfcbd9'}"
                       :labels="{checked: $t('lightoff'), unchecked: $t('lighton')}"/>
      </div>
    </div>
    <div class="row middle-xs">
      <div v-for="(item, i) in quadMotives" :key="i"
           @click="motifClicked(item.file)"
           class="col-xs-4 col-sm-3 col-md-2 center-xs motive-item">
        <pl-img
          class="list-item button"
          :folder="'960'"
          :fileName="`${item.file}a`"
          v-show="quadMotivesLightOn === false"
          sizes="(min-width: 64em) 16vw, (min-width: 48em) 25vw, (max-width: 48em) 33vw"></pl-img>
        <pl-img
          class="list-item button"
          :folder="'960'"
          v-show="quadMotivesLightOn === true"
          :fileName="`${item.file}b`"
          sizes="(min-width: 64em) 16vw, (min-width: 48em) 25vw, (max-width: 48em) 33vw"></pl-img>
        <div class="motive-label">{{item.label}}</div>
      </div>
      <modal v-if="selectedMotif" @close="selectedMotif = null">
        <h3 slot="header">custom header</h3>
        <div slot="body" class="row middle-xs">
          <div class="col-xs-12">
            <pl-img
              slot="body"
              :folder="'960'"
              :fileName="`${selectedMotif}a`"
              v-show="quadMotivesLightOn === false"
              sizes="80vw"></pl-img>
            <pl-img
              slot="body"
              :folder="'960'"
              :fileName="`${selectedMotif}b`"
              v-show="quadMotivesLightOn === true"
              sizes="80vw"></pl-img>
          </div>
        </div>
      </modal>
    </div>

    <div class="row middle-xs">
      <div class="col-xs-12">
        <h4 class="">{{ $t('products.quad.line_powered') }}</h4>
        <p>{{ $t('coming_soon') }}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import ToggleButton from '~components/ToggleButton.vue'
  import Modal from '~components/Modal.vue'

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
    components: {
      ToggleButton, Modal
    },
    data () {
      return {
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
    methods: {
      onQuadMotivesLightOnChanged (ev) {
        this.quadMotivesLightOn = ev.value
      },
      motifClicked (name) {
        console.log(name) // eslint-disable-line
        this.selectedMotif = this.selectedMotif === name ? null : name
      }
    },
    i18n: {
      messages: {
        en: {

        },
        de: {

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
    img{
      max-width: 90vw;
      max-height: 90vh;
    }
  }
</style>
