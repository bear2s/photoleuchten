<template>
  <v-menu bottom left>
    <v-btn icon slot="activator" style="text-transform: lowercase; color: inherit" dark>
      {{$store.state.locale}}
    </v-btn>
    <v-list>
      <v-list-tile v-for="(item, i) in items" :key="i" @click="setLang(item.lang)">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.lang }} - {{item.title}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: 'language-select',
    data () {
      return {
        items: [{lang: 'en', title: 'english'}, {lang: 'de', title: 'deutsch'}]
      }
    },
    methods: {
      setLang (val) {
        this.$store.commit('SET_LANG', val)
        this.$i18n.locale = val
      }
    }
  }
</script>
