<template>
  <v-footer
    :fixed="false"
    class="pt-4 pb-1"
    app>
    <v-layout
      row
      wrap>
      <v-flex
        xs12
        class="text-xs-right pb-1">
        <nuxt-link
          to="/contact"
          v-text="$t('links.contact')"/>
      </v-flex>
      <v-flex
        xs12
        class="text-xs-right pb-1">
        <nuxt-link
          to="/impressum"
          v-text="$t('links.legal')"/>
      </v-flex>
      <v-flex
        xs12
        class="text-xs-center"><span>&copy; {{ copyright }}</span></v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    name: 'PlFooter',
    data () {
      const date = new Date()

      return {
        startYear: '2017',
        year: `${date.getFullYear()}`
      }
    },
    computed: {
      copyright () {
        const span = this.year === this.startYear ? this.year : `${this.startYear} - ${this.year}`
        return `${span} PHOTOLEUCHTEN.COM ALL RIGHTS RESERVED`
      }
    }
  }
</script>
