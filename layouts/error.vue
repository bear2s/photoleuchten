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
              <v-btn
                v-if="error.statusCode === 404"
                to="/">
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
    props: {
      error: {
        type: Object,
        default: null
      }
    }
  }
</script>
