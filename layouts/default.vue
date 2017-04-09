<template>
  <div class="pl-app">
    <pl-header/>
    <main>
      <div class="content">
        <nuxt/>
      </div>
    </main>
    <pl-footer/>
  </div>
</template>

<script>
  import PlFooter from '~components/Footer.vue'
  import PlHeader from '~components/Header.vue'

  export default {
    components: {
      PlFooter, PlHeader
    }
  }
</script>

<style lang="less">
  .pl-app {
    background: #424242;
    color: rgb(247, 147, 30);
    .toolbar {
      background: #202020;
      height: 64px;

      .container, .middle-xs {
        height: 100%;
      }
    }

    main {
      min-height: calc(~'100vh - 128px');
    }
  }
</style>
