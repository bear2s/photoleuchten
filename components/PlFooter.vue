<template>
  <v-footer
    absolute
    height="auto"
    class="pb-1 px-3"
    app>
    <v-layout
      row
      wrap>
      <v-flex
        xs12
        class="text-xs-right pb-2">
        <nuxt-link
          :to="isDe ? '/kontakt' : '/en/contact'"
          v-text="isDe ? 'Kontakt' : 'Contact'"/>
      </v-flex>
      <v-flex
        xs12
        class="text-xs-right pb-2">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.etsy.com/shop/photoleuchten"
          v-text="'Shop'"/>
      </v-flex>
      <v-flex
        xs12
        class="text-xs-right pb-2">
        <nuxt-link
          :to="$t('links.legal.to')"
          v-text="$t('links.legal.txt')"/>
      </v-flex>
      <v-flex
        xs12
        class="text-xs-right pb-2">
        <nuxt-link
          :to="$t('links.privacyPolicy.to')"
          v-text="$t('links.privacyPolicy.txt')"/>
      </v-flex>
      <v-flex
        xs12
        class="text-xs-center py-2"><span>&copy; {{ copyright }}</span></v-flex>
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
    },
    i18n: {
      messages: {
        en: {
          links: {
            privacyPolicy: {
              to: '/en/privacy',
              txt: 'Privacy Policy'
            },
            legal: {
              to: '/en/legal',
              txt: 'Legal Notice'
            }
          }
        },
        de: {
          links: {
            privacyPolicy: {
              to: '/datenschutz',
              txt: 'Datenschutzerklärung'
            },
            legal: {
              to: '/impressum',
              txt: 'Impressum'
            }
          }
        }
      }
    }
  }
</script>
