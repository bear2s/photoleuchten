<template>
  <div class="products">
    <v-layout
      row
      wrap>
      <v-flex xs12>
        <h1 class="text-xs-center">{{ $t('h1') }}</h1>
        <h2 class="text-xs-center">{{ $t('h2') }}</h2>
        <pl-img
          blur-up
          file-name="b0"
          img-type="jpg"
          sizes="100vw"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'FramedObjects',
    i18n: {
      messages: {
        en: {
          h1: 'BESPANNTE RAHMEN IM GROSSFORMAT',
          h2: 'Leuchte "Bow-Wave"'
        },
        de: {
          h1: ''
        }
      }
    }
  }
</script>

