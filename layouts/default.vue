<template>
  <div class="pl-app">
    <pl-header/>
    <div class="row end-xs">
      <div class="col-xs-12">
        <lang-select></lang-select>
      </div>
    </div>
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
  import LangSelect from '~components/LangSelect.vue'

  export default {
    components: {
      PlFooter, PlHeader, LangSelect
    }
  }
</script>

<style lang="less">
  .pl-app {
    background: #424242;
    color: rgb(251, 176, 59);
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
