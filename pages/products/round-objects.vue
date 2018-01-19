<template>
  <div class="products">
    <h1 class="text-xs-center">{{$t('products.round.headline')}}</h1>
    <v-layout row>
      <v-flex xs12 class="text-xs-center pb-3">
        <h2 class="no-transform">{{$t('japanpaper_headline')}}</h2>
        <pl-img fileName="r0"
                imgType="jpg"
                sizes="100vw"></pl-img>
      </v-flex>
    </v-layout>

    <v-container fill-height class="pa-0 mt-3">
      <v-layout row>
        <v-flex xs4 class="text-xs-center">
          <pl-img fileName="r1"
                  imgType="png"
                  :maxImgSize="960"
                  sizes="33vw"></pl-img>
        </v-flex>
        <v-flex xs4 class="text-xs-center">
          <pl-img v-show="!r2active"
                  :maxImgSize="960"
                  fileName="r2"
                  imgType="png"
                  sizes="32vw"></pl-img>
          <pl-img v-for="(val, i) in 6" :key="i"
                  v-show="r2active && (r2selectedIndex === (i+3))"
                  :maxImgSize="960"
                  :fileName="'r'+ (i+3)"
                  imgType="png"
                  sizes="32vw"></pl-img>

        </v-flex>
        <v-flex xs4 class="align-center" style="display: flex">
          <pl-img fileName="r9"
                  :maxImgSize="960"
                  imgType="png"
                  sizes="33vw"></pl-img>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout row>
      <v-flex xs12 class="text-xs-center">
        <toggle-button
          :value="r2active"
          :sync="true"
          @change="r2active = !r2active"
          :color="{checked: 'rgb(251, 176, 59)', unchecked: '#bfcbd9'}"
          :labels="{checked: $t('lightoff'), unchecked: $t('lighton')}"/>
      </v-flex>
    </v-layout>

    <v-layout row wrap
              class="pt-1">
      <v-flex xs12 class="text-xs-center color-select">
        <div class="mr-1"
             v-for="(val, i) in ['#8BD5F9', '#6F9EFD', '#FE3747', '#C18FFE', '#FAB297', '#3AF4A2']" :key="i"
             :style="`background-color: ${val}; visibility: ${r2active ? 'visible' : 'hidden'};` "
             @click.stop="r2selectedIndex = (i+3);"></div>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12 class="">
        <p>{{$t('japanpaper_desc')}}</p>
      </v-flex>
    </v-layout>

    <v-container fill-height class="pa-0">
      <v-layout row wrap>

        <v-flex xs12 sm6 lg8 v-if="false"></v-flex>
        <v-flex xs12>
          <ul class="card mr-1 pl-3" style="height: 100%;">
            <p class="pt-3">{{$t('japanpaper_specs_headline')}}</p>

            <li v-for="(point, i) in $t('japanpaper_specs')" :key="i">
              {{point}}
            </li>
          </ul>
        </v-flex>

        <v-flex xs12 sm6 lg4 v-if="false">
          <div style="position: relative;">
            <pl-img fileName="r10" :maxImgSize="960" imgType="jpg" sizes="(max-width: 48em) 66vw (min-width: 48em) 33vw"
                    style="width: 100%;"></pl-img>
            <v-layout row style="width: 100%; position: absolute; top: 0; left: 0; height: auto;">
              <v-flex xs12 class="box">
                <div style="padding: 0.25rem; margin: 0;">{{$t('japan_paper_img')}}</div>
              </v-flex>
            </v-layout>
            <v-layout row style="position: absolute; bottom: 0; left: 0; height: auto;">
              <v-flex xs12>
                <div style="background: rgba(0,0,0,0.4); margin: 0 0 5px 0; padding: 0.25rem;">
                  {{$t('japan_paper_img_desc')}}
                </div>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>

      </v-layout>
    </v-container>

    <v-layout row class="mt-3 mb-3">
      <v-flex xs12 class="text-xs-center">
        <h2 class="no-transform pt-1 pb-1">{{$t('water_headline')}}</h2>
        <pl-img fileName="r20"
                imgType="jpg"
                sizes="100vw"></pl-img>
      </v-flex>
    </v-layout>
    <v-layout row class="mt-3">
      <v-flex xs4 class="text-xs-center">
        <pl-img fileName="r21" imgType="png" :maxImgSize="960" sizes="33vw"></pl-img>
      </v-flex>
      <v-flex xs4 class="text-xs-center toggle-active" @click.stop="r22active = !r22active">
        <pl-img v-show="!r22active" :maxImgSize="960" fileName="r22" imgType="png" sizes="33vw"></pl-img>
        <pl-img v-show="r22active" :maxImgSize="960" fileName="r23" imgType="png" sizes="33vw"></pl-img>
        <toggle-button :value="r22active"
                       @change="r22active = !r22active"
                       :sync="true"
                       :color="{checked: 'rgb(251, 176, 59)', unchecked: '#bfcbd9'}"
                       :labels="{checked: $t('lightoff'), unchecked: $t('lighton')}"/>
      </v-flex>
      <v-flex xs4 class="align-center" style="display: flex">
        <pl-img fileName="r24" :maxImgSize="960" imgType="jpg" sizes="33vw"></pl-img>
      </v-flex>
    </v-layout>


    <v-layout row wrap class="text-xs-justify mt-3">
      <v-flex xs12>
        <p>{{$t('water_desc')}}</p>
      </v-flex>
      <v-flex xs12>
        <ul class="card pl-3">
          <p class="pt-3">{{$t('water_specs_headline')}}</p>

          <li v-for="(point, i) in $t('water_specs')" :key="i">
            {{point}}
          </li>
        </ul>
      </v-flex>
    </v-layout>
  </div>

</template>
<script>
  export default {
    transition: 'slide-left',
    asyncData ({store, route}) {
      console.log(route.name)
      return store.dispatch('setLanguageKey', route.name === 'products-round-objects' ? 'en' : 'de')
    },
    data () {
      return {
        r2active: false,
        r22active: false,
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
