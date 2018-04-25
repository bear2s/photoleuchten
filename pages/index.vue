<template>
  <v-layout
    row
    wrap>
    <v-flex
      xs12
      class="text-xs-center">
      <h1>{{ $t('home.headline') }}</h1>
    </v-flex>
    <v-flex
      xs12
      class="text-xs-right">
      <pl-img
        blur-up
        file-name="t1"
        img-type="jpg"
        sizes="99vw"
        :quality="85"/>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    transition: 'slide-left',
    name: 'App'
  }
</script>
