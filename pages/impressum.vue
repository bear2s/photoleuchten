<template>
  <div class="container impressum" v-once>
    <div class="row">
      <div class="col-xs-12">
        <h1 class="title">Impressum</h1>
        <h2 class="subheading">Angaben gemäß § 5 TMG:</h2>
        <p>
          Sylvia Bär<br/>
          Photoleuchten<br/>
          76137 Karlsruhe
        </p>
        <h2 class="subheading">Kontakt:</h2>
        <p>
          E-Mail:<br/>
          photoleuchten@yahoo.com
        </p>
        <h2 class="subheading">Umsatzsteuer-ID:</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br/>
          DE304325864
        </p>
      </div>
    </div>
  </div>
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
