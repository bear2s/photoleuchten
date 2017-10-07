<template>
  <div class="lang-select">
    <span @click="setLang('en')" :class="{active: $store.state.locale === 'en'}">en</span> |
    <span @click="setLang('de')" :class="{active: $store.state.locale === 'de'}">de</span>
  </div>
</template>

<script>
  export default {
    methods: {
      setLang (val) {
        this.$store.commit('SET_LANG', val)
        this.$i18n.locale = val
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
      &.active {
        text-decoration: underline;
      }
    }
  }
</style>
