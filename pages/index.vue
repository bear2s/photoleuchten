<template>
  <v-layout row wrap>
    <v-flex xs12 class="text-xs-right">
      <h5>{{$t('home.headline')}}</h5>
    </v-flex>
    <v-flex xs12 class="text-xs-right">
      <pl-img fileName="q0"
              imgType="png"
              sizes="99vw"
              :quality="85"></pl-img>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    transition: 'slide-left',
    name: 'app'
  }
</script>
