<template>
  <v-app class="pl-app" top-toolbar>
    <v-toolbar>
      <!--<v-toolbar-side-icon @click.native.stop="nav2 = !nav2"/>-->
      <v-toolbar-logo>
        pl PHOTOLEUCHTEN
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
        <v-container>
          <v-row>
            <v-col xs12="xs12">
              <h5 class="text-xs-right">Wandleuchten - Lichtobjekte - Photo + Licht</h5>
            </v-col>
          </v-row>

        </v-container>
        <v-container fluid>
          <img width="100%" height="auto" src="../static/img/wall.jpg" alt="">
        </v-container>
      </v-content>
    </main>
    <v-footer>
      <span class="text-xs-left">© 2017 photoleuchten</span>
    </v-footer>
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

<style lang="less">
  .pl-app{
    .toolbar, .footer {
      background: #202020;
    }
    .content{
      background: inherit;
    }
    h1, h2, h3, h4, h5, h6 {
      color: #fff;
    }
  }
</style>
