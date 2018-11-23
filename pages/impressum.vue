<template>
  <v-layout
    v-once
    row>
    <v-flex xs12>
      <h3>Impressum</h3>
      <h4>Angaben gemäß § 5 TMG:</h4>
      <p>
        Sylvia Bär<br>
        Photoleuchten<br>
        76137 Karlsruhe <br>
        E-Mail: photoleuchten@yahoo.com
      </p>
      <h4>Umsatzsteuer-ID:</h4>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br>
        DE304325864
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'Impressum',
    head: {
      title: 'Impressum | Photoleuchten.com  ▶',
      htmlAttrs: {
        lang: 'de'
      },
      meta: []
    },
    asyncData ({ store, route }) {
      return store.dispatch('setLanguageKey', 'de')
    },
    transition: 'slide-left'
  }
</script>
