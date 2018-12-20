<template>
  <v-container fill-height>
    <v-layout row wrap align-center class="collection">
      <v-flex xs12 class="text-xs-center">
        <h3>{{isDe ? 'Kollektion' : 'Collection'}}</h3>
      </v-flex>
      <v-flex xs12 sm4 class="text-xs-center">
        <v-card
          class="mr-5"
          color="transparent"
          hover flat ripple
          :to="isDe ? '/produkte/wandleuchten' : '/en/products/wall-lights'">
          <pl-img
            file-name="t10"
            alt="goto wall lights"
            :title="isDe ? 'wandleuchten' : 'wall lights'"
            sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw" />
          {{isDe ? 'Wandleuchten' : 'Wall lights'}}
        </v-card>

      </v-flex>
      <v-flex xs12 sm4>
        <pl-img
          file-name="t13"
          img-type="png"
          sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw" />
      </v-flex>
      <v-flex xs12 sm4>
        <pl-img
          class="pa-5"
          file-name="t12"
          sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw" />
      </v-flex>

      <v-flex xs12 sm4 class="text-xs-center">
        <v-card
          class="ma-5"
          flat hover ripple
          :to="isDe ? '/produkte/lichtobjekte' : '/en/products/light-objects'"
          color="transparent">
          <pl-img
            file-name="t11"
            alt="goto light objects"
            title="light objects"
            sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw" />
          {{isDe ? 'Lichtobjekte' : 'Light objects'}}
        </v-card>
      </v-flex>
      <v-flex xs12 sm4
              class="text-xs-center justify-center">
        <v-btn v-show="false" large outline disabled color="primary">{{isDe ? 'Entdecken' : 'Discover'}}</v-btn>
      </v-flex>
      <v-flex xs12 sm4 class="text-xs-center">
        <v-card
          flat hover ripple
          :to="isDe ? '/produkte/leuchtkaesten' : '/en/products/lightboxes'"
          color="transparent">
          <pl-img
            file-name="t14"
            alt="goto light boxes"
            title="light boxes"
            sizes="(max-width: 48em) 99vw (min-width: 48em) 32vw" />
          {{isDe ? 'Leuchtkästen' : 'Light boxes'}}
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    name: 'Collection'
  }
</script>
