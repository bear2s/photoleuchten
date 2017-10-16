<template>
  <v-layout row>
      <v-flex xs12>
        <h2>{{$t('about_headline')}}</h2>
        <p v-for="(paragraph, i) in $t(['about_paragraphs'])" :key="i">
          {{paragraph}}
        </p>
        <p v-html="$t('about_paragraph_contact')"></p>
        <p class="mt-3">
          Sylvia Bär<br/>
          {{$t('about_under_signature')}}
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
  .title {
    margin-top: 50px;
  }

  .info {
    font-weight: 300;
    color: #9aabb1;
    margin: 0;
    margin-top: 10px;
  }

</style>
