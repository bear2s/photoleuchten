<template>
  <div class="pl-app">
    <header class="top-toolbar toolbar row middle-xs">
      <a href="/" class="logo col-xs-6">
        <h1><span>pl</span> <span>PHOTOLEUCHTEN</span></h1>
      </a>
    </header>
    <main>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 end-xs">
              <h2>Wandleuchten - Lichtobjekte - Photo + Licht</h2>
            </div>
          </div>
        </div>
        <img v-lazy="'../static/img/leuchten/q2-1920.jpg'"
             width="100%" height="auto"
             alt="photoleuchte">
        <div class="row">
          <template v-for="(item, index) in blocks">
            <div class="col-xs-4">
              <pl-img :fileName="item" sizes="32vw" :lazy="false"></pl-img>
            </div>
          </template>
        </div>
        <div style="height: 800px;"></div>
      </div>
    </main>
    <footer class="footer toolbar">
      <span class="">© 2017 photoleuchten</span>
    </footer>
  </div>
</template>

<script>

  import 'flexboxgrid/dist/flexboxgrid.min.css'
  import VueMasonry from 'vue-masonry'
  import PlImg from './components/PlImg'

  export default {
    name: 'app',
    components: {
      PlImg, VueMasonry
    },
    data () {
      return {
        nav2: false,
        blocks: ['q1', 'r2', 'r3']
      }
    }
  }
</script>

<style lang="less">

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
    .toolbar, .content {
      padding: 1rem;
    }
    main {
      min-height: calc(~'100vh - 128px');
      .content {
        padding: 1rem;
      }
    }
    .top-toolbar {
      height: 64px;
    }
    footer {
      min-height: 64px;
    }
  }
</style>
