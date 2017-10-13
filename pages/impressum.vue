<template>
  <v-layout row v-once>
    <v-flex xs12>
      <h4>Impressum</h4>
      <h5>Angaben gemäß § 5 TMG:</h5>
      <p>
        Sylvia Bär<br/>
        Photoleuchten<br/>
        76137 Karlsruhe
      </p>
      <h5>Kontakt:</h5>
      <p>
        E-Mail:<br/>
        photoleuchten@yahoo.com
      </p>
      <h5>Umsatzsteuer-ID:</h5>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br/>
        DE304325864
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    transition: 'slide-left'
  }
</script>

<style scoped>
  .impressum {
    font-family: sans-serif;
  }
</style>
