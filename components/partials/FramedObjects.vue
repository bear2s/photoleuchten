<template>
  <div class="products">
    <v-layout
      row
      wrap>
      <v-flex xs12>
        <h2 class="text-xs-center">{{ $t('h2') }}</h2>
        <h3 class="text-xs-center">{{ $t('h3') }}</h3>
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
          h2: 'COVERED FRAMES IN LARGE FORMAT',
          h3: 'Light object "Bow-Wave"'
        },
        de: {
          h2: 'BESPANNTE RAHMEN IM GROßFORMAT',
          h3: 'Leuchte "Bow-Wave"'
        }
      }
    }
  }
</script>

