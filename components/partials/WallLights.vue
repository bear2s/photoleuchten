<template>
  <div class="products">
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="text-xs-center">{{ $t('wall_lights') }}</h1>
        <h2 class="text-xs-center">{{ 'PHOTO' + (isDe ? '-WANDLEUCHTEN' : ' WALL LIGHTS') }}</h2>
      </v-flex>
      <v-flex
        xs12
        class="text-xs-center pb-3">
        <pl-img
          alt="wall light image big"
          title="wall light"
          file-name="w0"
          img-type="jpg"
          sizes="100vw" />
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <h3 class="block text-xs-center">{{$t('line_powered')}}</h3>
      </v-flex>
      <v-flex
        v-for="(item, i) in ['q8', 'q9', 'q10', 'q11', 'q12', 'q13']"
        :key="item + '-' + i"
        xs12
        sm4
        class="text-xs-justify pt-1"
        style="position: relative;">
        <pl-img
          :file-name="item"
          :quality="85"
          sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw" />
        <div
          v-if="i === 1"
          class="text-xs-center"
          style="bottom: 10px; width: 100%; position: absolute;">La Pedrera
        </div>
        <div
          v-if="i === 4"
          class="text-xs-center"
          style="bottom: 10px; width: 100%; position: absolute;">Spirals of a temple
        </div>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 class="my-3 mx-3">
        <wall-lights-desc-de v-if="$store.state.locale === 'de'" class="text-xs-center my-5" />
        <wall-lights-desc-en v-else class="text-xs-center my-5" />
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
          file-name="q15"
          img-type="png"
          sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw" />
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex
        xs12 md8
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
        xs12 sm6 md4
        class="pa-1 pb-0">
        <pl-img
          file-name="q14"
          img-type="png"
          sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import WallLightsDescDe from '../../components/partials/WallLightsDescDe.vue'
  import WallLightsDescEn from '../../components/partials/WallLightsDescEn.vue'

  export default {
    name: 'WallLights',
    components: {
      WallLightsDescDe, WallLightsDescEn
    },
    i18n: {
      messages: {
        en: {
          wall_lights: 'Wall lights',
          line_powered: 'Photo wall lights "Square" (mains powered)'
        },
        de: {
          wall_lights: 'Wandleuchten',
          line_powered: 'Photo-Wandleuchten "Square" (netzbetrieben)'
        }
      }
    }
  }
</script>
