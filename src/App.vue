<template>
  <div class="pl-app">
    <header class="top-toolbar toolbar">
      <div class="container">
        <div class="row middle-xs">
          <div class="col-xs-6">
            <a href="/" class="logo">
              <h1><span>pl</span> <span>PHOTOLEUCHTEN</span></h1>
            </a>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 end-xs">
              <h2>Wandleuchten - Lichtobjekte - Photo + Licht</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <pl-img fileName="q1" sizes="100vw" :lazy="false"></pl-img>
            </div>
          </div>
          <div class="row">
            <h3 class="col-xs-12">Runde Leuchten</h3>
            <div v-for="(item, i) in roundImgs" :key="i" class="col-xs-4">
              <pl-img :fileName="item" sizes="32vw" :lazy="true"></pl-img>
            </div>
          </div>
          <div class="row">
            <h3 class="col-xs-12">Quadratische Leuchten</h3>
            <div v-for="(item, i) in quadImgs" :key="i" class="col-xs-4">
              <pl-img :fileName="item" sizes="32vw" :lazy="true"></pl-img>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer toolbar">
      <div class="container">
        <div class="row middle-xs">
          <div class="col-xs-6">
            <span class="copyright">© 2017 photoleuchten</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

  import 'flexboxgrid/dist/flexboxgrid.min.css'
  import PlImg from './components/PlImg'

  export default {
    name: 'app',
    components: {
      PlImg
    },
    data () {
      return {
        nav2: false,
        quadImgs: ['q2', 'q4', 'q5'],
        roundImgs: ['r1', 'r5', 'r6', 'r4', 'r3', 'r7']
      }
    }
  }
</script>

<style lang="less">

  @import (css) "../node_modules/normalize.css";

  @font-face {
    font-family: TimeBurner;
    src: url('../static/fonts/timeburnernormal.ttf');
  }

  @font-face {
    font-family: TimeBurnerBold;
    src: url('../static/fonts/timeburnerbold.ttf');
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: TimeBurner, sans-serif;
  }

  img {
    max-width: 100%;
  }

  .logo {
    text-decoration: none;
    color: inherit;
    h1 span:first-of-type {
      border: 1px solid;
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  .pl-app {
    background: #424242;
    color: #fff;
    .toolbar {
      background: #202020;
    }

    main {
      min-height: calc(~'100vh - 128px');
    }
    .toolbar {
      height: 64px;
      .container, .middle-xs {
        height: 100%;
      }
    }
  }
</style>
