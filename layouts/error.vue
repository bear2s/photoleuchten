<template>
  <v-app dark>
    <main>
      <v-content>
        <v-container>
          <v-layout>
            <v-flex xs12>
              <h2>
                Ops, something went wrong... <br>
              </h2>
              <h3>
                Error {{ error.statusCode }} -  {{ error.message }}
              </h3>
              <v-btn to="/"
                     v-if="error.statusCode === 404">
                Back to the homepage
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>
<script>
  export default {
    props: ['error']
  }
</script>

<style scoped>
  .title {
    margin-top: 15px;
    font-size: 5em;
  }

  .info {
    font-weight: 300;
    color: #9aabb1;
    margin: 0;
  }

  .button {
    margin-top: 50px;
  }
</style>
