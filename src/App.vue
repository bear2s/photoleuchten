<template>
  <v-app id="example-2" top-toolbar>
    <v-toolbar>
      <!--<v-toolbar-side-icon @click.native.stop="nav2 = !nav2"/>-->
      <v-toolbar-logo>
        pl
        <!--<img src="./assets/logo.png">-->
      </v-toolbar-logo>
    </v-toolbar>
    <main>
      <!--<v-sidebar left fixed drawer v-model="nav2">-->
        <!--<v-list>-->
          <!--<v-list-item v-for="i in 3" :key="i">-->
            <!--<v-list-tile>-->
              <!--<v-list-tile-title>Item {{ i }}</v-list-tile-title>-->
            <!--</v-list-tile>-->
          <!--</v-list-item>-->
        <!--</v-list>-->
      <!--</v-sidebar>-->
      <v-content>
        <v-container fluid>
          <div class="title">Main Content</div>
          <img src="../static/img/wall.jpg" alt="">
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>

  import 'vuetify/dist/vuetify.min.css'
  import Hello from './components/Hello'

  export default {
    name: 'app',
    components: {
      Hello
    },
    data () {
      return {
        nav2: false
      }
    }
  }
</script>

