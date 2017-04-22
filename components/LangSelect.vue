<template>
  <div class="lang-select">
    <span @click="setLang('en')">english</span>
    |
    <span @click="setLang('de')">deutsch</span>
  </div>
</template>

<script>
  export default {
    methods: {
      setLang (val) {
        if (['en', 'de'].indexOf(val) !== -1) {
          this.$store.commit('SET_LANG', val)
          this.$i18n.locale = this.$store.state.locale
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .lang-select {
    > span {
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
