<template>
  <div class="products">
    <h1 class="text-xs-center">{{ $t('products.round.headline') }}</h1>
    <v-layout row>
      <v-flex
        xs12
        class="text-xs-center pb-3">
        <h2 class="no-transform">{{ $t('japanpaper_headline') }}</h2>
        <pl-img
          alt="japanpaper luminaire"
          title="japanpaper"
          file-name="r0"
          img-type="jpg"
          sizes="100vw"/>
      </v-flex>
    </v-layout>

    <v-container
      fill-height
      class="pa-0 mt-3">
      <v-layout
        row
        wrap>
        <v-flex
          xs12
          sm4
          class="text-xs-center">
          <pl-img
            :max-img-size="960"
            file-name="r1"
            img-type="png"
            sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"/>
        </v-flex>
        <v-flex
          xs12
          sm4
          class="text-xs-center pb-3">
          <pl-img
            v-show="!r2active"
            :max-img-size="960"
            file-name="r2"
            img-type="png"
            sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"/>
          <pl-img
            v-for="(val, i) in 6"
            v-if="r2active && (r2selectedIndex === (i+3))"
            :key="'colored' + i"
            :max-img-size="960"
            :file-name="'r'+ (i+3)"
            img-type="png"
            sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"/>

          <div class="block">
            <toggle-button
              :value="r2active"
              :sync="true"
              :color="{checked: 'rgb(251, 176, 59)', unchecked: '#bfcbd9'}"
              :labels="{checked: $t('lightoff'), unchecked: $t('lighton')}"
              @change="r2active = !r2active"/>
          </div>
          <div class="color-select d-inline-flex">
            <div
              v-for="(val, i) in ['#8BD5F9', '#6F9EFD', '#FE3747', '#C18FFE', '#FAB297', '#3AF4A2']"
              :key="'hex' + i"
              :style="`background-color: ${val}; visibility: ${r2active ? 'visible' : 'hidden'};` "
              class="mr-1"
              @click.stop="r2selectedIndex = (i+3);"/>
          </div>

        </v-flex>
        <v-flex
          xs12
          sm4
          class="align-center"
          style="display: flex">
          <pl-img
            :max-img-size="960"
            file-name="r9"
            img-type="png"
            sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"/>
        </v-flex>
      </v-layout>
    </v-container>

    <v-layout row>
      <v-flex
        xs12
        class="">
        <p>{{ $t('japanpaper_desc') }}</p>
      </v-flex>
    </v-layout>

    <v-container
      fill-height
      class="pa-0">
      <v-layout
        row
        wrap>

        <v-flex
          v-if="false"
          xs12
          sm6
          lg8/>
        <v-flex xs12>
          <ul
            class="card mr-1 pl-3"
            style="height: 100%;">
            <p class="pt-3">{{ $t('japanpaper_specs_headline') }}</p>

            <li
              v-for="(point, i) in $t('japanpaper_specs')"
              :key="i">
              {{ point }}
            </li>
          </ul>
        </v-flex>

        <v-flex
          v-if="false"
          xs12
          sm6
          lg4>
          <div style="position: relative;">
            <pl-img
              :max-img-size="960"
              file-name="r10"
              img-type="jpg"
              sizes="(max-width: 48em) 66vw (min-width: 48em) 33vw"
              style="width: 100%;"/>
            <v-layout
              row
              style="width: 100%; position: absolute; top: 0; left: 0; height: auto;">
              <v-flex
                xs12
                class="box">
                <div style="padding: 0.25rem; margin: 0;">{{ $t('japan_paper_img') }}</div>
              </v-flex>
            </v-layout>
            <v-layout
              row
              style="position: absolute; bottom: 0; left: 0; height: auto;">
              <v-flex xs12>
                <div style="background: rgba(0,0,0,0.4); margin: 0 0 5px 0; padding: 0.25rem;">
                  {{ $t('japan_paper_img_desc') }}
                </div>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>

      </v-layout>
    </v-container>

    <v-layout
      row
      class="mt-3 mb-3">
      <v-flex
        xs12
        class="text-xs-center">
        <h2 class="no-transform pt-1 pb-1">{{ $t('water_headline') }}</h2>
        <pl-img
          alt="water luminaire"
          title="water style"
          file-name="r20"
          img-type="jpg"
          sizes="100vw"/>
      </v-flex>
    </v-layout>
    <v-layout
      row
      wrap
      class="mt-3">
      <v-flex
        xs12
        sm4
        class="text-xs-center">
        <pl-img
          :max-img-size="960"
          file-name="r21"
          img-type="png"
          sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"/>
      </v-flex>
      <v-flex
        xs12
        sm4
        class="text-xs-center toggle-active pb-3"
        @click.stop="r22active = !r22active">
        <pl-img
          :max-img-size="960"
          :file-name="r22active ? 'r23' : 'r22'"
          img-type="png"
          sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"/>
        <toggle-button
          :value="r22active"
          :sync="true"
          :color="{checked: 'rgb(251, 176, 59)', unchecked: '#bfcbd9'}"
          :labels="{checked: $t('lightoff'), unchecked: $t('lighton')}"
          @change="r22active = !r22active"/>
      </v-flex>
      <v-flex
        xs12
        sm4
        class="align-center"
        style="display: flex">
        <pl-img
          :max-img-size="960"
          file-name="r24"
          img-type="jpg"
          sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"/>
      </v-flex>
    </v-layout>

    <v-layout
      row
      wrap
      class="text-xs-justify mt-3">
      <v-flex xs12>
        <p>{{ $t('water_desc') }}</p>
      </v-flex>
      <v-flex xs12>
        <ul class="card pl-3">
          <p class="pt-3">{{ $t('water_specs_headline') }}</p>

          <li
            v-for="(point, i) in $t('water_specs')"
            :key="i">
            {{ point }}
          </li>
        </ul>
      </v-flex>
    </v-layout>

    <v-layout
      row
      class="mt-3 mb-3">
      <v-flex
        xs12
        class="text-xs-center">
        <h2 class="no-transform pt-1 pb-1">{{ $t('nyc_headline') }}</h2>
        <pl-img
          file-name="r30"
          img-type="jpg"
          sizes="100vw"/>
      </v-flex>
    </v-layout>

    <v-layout
      row
      wrap
      class="mt-3">
      <v-flex
        xs12
        sm4
        class="text-xs-center">
        <pl-img
          :max-img-size="960"
          file-name="r31"
          img-type="png"
          sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"/>
      </v-flex>
      <v-flex
        xs12
        sm4
        class="text-xs-center toggle-active pb-3"
        @click.stop="r32active = !r32active">
        <pl-img
          :max-img-size="960"
          :file-name="r32active ? 'r33_1' : 'r32'"
          img-type="png"
          sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"/>
        <toggle-button
          :value="r32active"
          :sync="true"
          :color="{checked: 'rgb(251, 176, 59)', unchecked: '#bfcbd9'}"
          :labels="{checked: $t('lightoff'), unchecked: $t('lighton')}"
          @change="r32active = !r32active"/>
      </v-flex>
      <v-flex
        xs12
        sm4
        class="align-center"
        style="display: flex">
        <pl-img
          :max-img-size="960"
          file-name="r34"
          img-type="jpg"
          sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw"/>
      </v-flex>
    </v-layout>
    <round-skycrystal-desc-de v-if="$store.state.locale === 'de'" class="text-xs-center"/>
    <round-skycrystal-desc-en v-else class="text-xs-center" />
    <v-layout
      row
      wrap
      class="text-xs-justify mt-3">
      <v-flex xs12>
        <ul class="card pl-3">
          <p class="pt-3">{{ $t('nyc_specs_headline') }}</p>

          <li
            v-for="(point, i) in $t('water_specs')"
            :key="i">
            {{ point }}
          </li>
        </ul>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import RoundSkycrystalDescDe from './RoundSkycrystalDescDe'
  import RoundSkycrystalDescEn from './RoundSkycrystalDescEn'
  export default {
    name: 'RoundObjects',
    components: { RoundSkycrystalDescEn, RoundSkycrystalDescDe },
    data () {
      return {
        r2active: false,
        r22active: false,
        r32active: false,
        r2selectedIndex: 3
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .round-objects {
    margin-bottom: 30vh;
  }

  .toggle-active, .color-select > div {
    &:hover {
      cursor: pointer
    }
  }

  .color-select {
    > div {
      width: 2rem;
      height: 2rem;
      display: inline-block;
      border-radius: 50%;
      margin: 0.1rem;
    }
  }
</style>
