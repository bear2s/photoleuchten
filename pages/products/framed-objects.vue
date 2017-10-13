<template>
  <v-layout row>
    <v-flex xs12 class="text-xs-center text-xs-justify">
      <h1 class="text-xs-center">{{$t('coming_soon')}}</h1>
      <pl-img fileName="b0" imgType="jpg" sizes="100vw"></pl-img>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    transition: 'slide-left'
  }
</script>
