<template>
  <v-layout row>
    <div xs12 class="text-xs-center text-xs-justify">
      <p>{{$t('coming_soon')}}</p>
      <pl-img fileName="b0" imgType="jpg" sizes="100vw"></pl-img>
    </div>
  </v-layout>
</template>

<script>
  export default {
    transition: 'slide-left'
  }
</script>
